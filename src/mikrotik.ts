import { NodeAPI, Node, NodeMessageInFlow } from "node-red";
import { MikrotikDeviceNode } from "./interfaces"

var mikrotik = require('mikronode-ng2');

export = function (RED: NodeAPI) {
    function NodeMikrotik(this: Node & { device: MikrotikDeviceNode, action: string }, config: any) {
        RED.nodes.createNode(this, config);

        this.device = RED.nodes.getNode(config.device) as MikrotikDeviceNode;
        this.action = config.action;

        var node = this;
        var host = this.device.host;
        var port = this.device.port;
        var username = this.device.username;
        var password = this.device.password;
        if (!!this.device.credentials) {
            username = this.device.credentials.secusername;
            password = this.device.credentials.secpassword;
        }
        
        let command: string;

        switch (parseInt(node.action)) {
            case 0:
                command = '/log/print';
                break;
            case 1:
                command = '/system/resource/print';
                break;
            case 2:
                command = '/interface/wireless/registration-table/print';
                break;
            case 3:
                command = '/system/reboot';
                break;
            case 9:
                command = '';
                break;
        }

        var connection = null;

        this.on('input', function (msg: NodeMessageInFlow & { command: string, success: boolean }) {

            if (command == '') command = msg.payload as string;
            if (command == '') return false;
            connection = mikrotik.getConnection(host, username, password, { closeOnDone: true, port: port });
            connection.getConnectPromise().then(function (conn) {
                conn.getCommandPromise(command).then(function resolved(values) {


                    var parsed = mikrotik.parseItems(values);
                    var pl = [];
                    parsed.forEach(function (item: any) {
                        pl.push(item);
                    });
                    msg.payload = values;

                    msg.command = command;
                    msg.success = true;
                    node.send(msg);
                }, function rejected(reason: any) {
                    node.error('Error executing cmd[' + command + ']: ' + JSON.stringify(reason));

                });
            },
                function (err: any) {
                    node.error("Connection error: " + err);
                }
            );
        });

        this.on('close', function () {
            connection && connection.connected && connection.close(true);
        });
    }

    RED.nodes.registerType("mikrotik", NodeMikrotik);
};






