import { EditorRED, EditorNodeDef } from "node-red";
declare var RED: EditorRED;
import { Credentials, MikrotikDeviceConfig } from "./interfaces";

RED.nodes.registerType('mikrotik-device', {
    category: 'config',
    defaults: {
        host: { value: '192.168.0.1', required: true },
        port: { value: 8728, required: true, validate: RED.validators.number() },
        username: { value: 'admin' },
        password: { value: '' }
    },
    label: function () {
        if (!!this.username)
            return this.username + '@' + this.host + ':' + this.port;
        else
            return this.host + ':' + this.port;
    },
    credentials: {
        secusername: { type: "text" },
        secpassword: { type: "password" },
    },
    oneditprepare() {
        // migrate old non secure credentials in the form

        if (!this.credentials)
            this.credentials = {} as any;

        if (!this.credentials.secusername) {
            this.credentials.secusername = this.username;
            this.credentials.secpassword = this.password;
            $("#node-config-input-secusername").val(this.username);
            $("#node-config-input-secpassword").val(this.password);
        }
    },
    oneditsave() {
        // take care to fully remove the non secured saved credentials
        this.username = null;
        this.password = null;
    }
} as EditorNodeDef<any, any, MikrotikDeviceConfig & { credentials: Credentials }>);

