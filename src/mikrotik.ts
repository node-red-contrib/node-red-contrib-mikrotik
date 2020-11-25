import { NodeAPI, Node, NodeMessageInFlow } from "node-red";
import { MikrotikDeviceNode } from "./interfaces"

import { RouterOSAPI } from "node-routeros";

export = function (RED: NodeAPI) {
    function NodeMikrotik(this: Node, config: any) {
        RED.nodes.createNode(this, config);
        let node = this;

        let device = RED.nodes.getNode(config.device) as MikrotikDeviceNode;
        let deviceConfig = {
            host: device.host,
            port: device.port,
            user: device.credentials.secusername,
            password: device.credentials.secpassword,
        };

        let cmd = config.command;
        // convert action -> command for not migrated nodes, can be removed with a breaking change
        if (!cmd) {
            const lookUp = ['/log/print', '/system/resource/print', '/interface/wireless/registration-table/print', '/system/reboot'];
            let value = parseInt(config.action as string, 10);
            if (-1 < value && value < 4)
                cmd = lookUp[value];
        }

        var connection: RouterOSAPI = null;

        this.on('input', function (msg: NodeMessageInFlow & { command: any, success: boolean } & typeof deviceConfig) {
            // allow override of parameters through properties of the message
            let cfg = { ...deviceConfig };
            if (msg.user) cfg.user = msg.user;
            if (msg.password) cfg.password = msg.password;
            if (msg.host) cfg.host = msg.host;
            if (msg.port) cfg.port = msg.port;

            if (!msg.command) msg.command = cmd;
            if (!msg.command) msg.command = msg.payload;
            // for compatibility reasons of old mikrotik node
            if (msg.command.command) msg.command = msg.command.command;

            try {
                connection = new RouterOSAPI(cfg);
                connection.connect()
                    .then(() => {
                        return connection.write(msg.command);
                    })
                    .then((data) => {
                        msg.payload = data;
                        msg.success = true;
                        node.send(msg);

                        connection.close();
                    })
                    .catch((err) => {
                        node.error('Error executing cmd[' + JSON.stringify(msg.command) + ']: ' + JSON.stringify(err));
                        connection.close();
                    });
            }
            catch (err) {
                node.error('Error: ' + JSON.stringify(err));
            }
        });

        this.on('close', function () {
            connection && connection.connected && connection.close();
        });
    }

    RED.nodes.registerType("mikrotik", NodeMikrotik);
};
