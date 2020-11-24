import { NodeAPI, Node, NodeDef } from "node-red";

import { MikrotikDeviceNode, MikrotikDeviceConfig } from "./interfaces"

export = function (RED: NodeAPI) {
    function NodeConstructorMikrotikDevice(this: MikrotikDeviceNode, def: NodeDef & MikrotikDeviceConfig) {
        RED.nodes.createNode(this, def);

        this.host = def.host;
        this.port = def.port;

        if ((!this.credentials) || (!this.credentials.secusername)) {
            // take care the even non "converted" credentials that
            // are still unsafe stored, can be used.
            this.credentials = {
                secusername: def.username,
                secpassword: def.password
            };
        }
    }

    RED.nodes.registerType("mikrotik-device", NodeConstructorMikrotikDevice, {
        credentials: {
            secusername: { type: "text" },
            secpassword: { type: "password" }
        }
    });
}