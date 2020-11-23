import { NodeAPI, Node, NodeMessageInFlow } from "node-red";
import { MikrotikDeviceNode } from "./interfaces"

import { RouterOSAPI } from "node-routeros";

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

        let cmd: any;

        switch (parseInt(node.action)) {
            case 0:
                cmd = '/log/print';
                break;
            case 1:
                cmd = '/system/resource/print';
                break;
            case 2:
                cmd = '/interface/wireless/registration-table/print';
                break;
            case 3:
                cmd = '/system/reboot';
                break;
            case 9:
                cmd = '';
                break;
        }
        console.log("NEW NODE"+ cmd);
        var connection: RouterOSAPI = null;

        this.on('input', function (msg: NodeMessageInFlow & { command: string, success: boolean }) {
            let command = cmd;
            if (command == '') command = msg.payload as string;
            // for compatibility reasons of old mikrotik node
            if (command.command) command = command.command;
            if (command == '') return false;

            connection = new RouterOSAPI({
                host: host,
                user: username,
                password: password,
                port: port
            });

            try {
                connection.connect()
                    .then(() => {
                        return connection.write(command);
                    })
                    .then((data) => {
                        msg.payload = data;

                        msg.command = command;
                        msg.success = true;
                        node.send(msg);

                        connection.close();
                    })
                    .catch((err) => {
                        node.error('Error executing cmd[' + JSON.stringify(command) + ']: ' + JSON.stringify(err));
                    });
            }
            catch (err) {
                node.error('Error: ' + JSON.stringify(err));
            }

        });

        this.on('close', function () {
            console.log("CLOSE");
            connection && connection.connected && connection.close();
        });
    }

    RED.nodes.registerType("mikrotik", NodeMikrotik);
};






