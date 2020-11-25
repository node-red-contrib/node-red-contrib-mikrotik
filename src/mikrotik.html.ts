import { EditorRED, EditorNodeDef } from "node-red";
declare var RED: EditorRED;

RED.nodes.registerType('mikrotik', {
    category: 'network',
    color: '#E9967A',
    defaults: {
        device: { value: '', type: "mikrotik-device" },
        name: { value: '' },
        action: { value: '0' },
        command: { value: '' },
        "command-type": { value: 'str' }
    },
    inputs: 1,
    outputs: 1,
    icon: "feed.png",
    label: function () {
        return this.name || "mikrotik";
    },
    oneditprepare: function () {
        let node = this;
        $("#node-input-action").on('change', function () {
            let cmd = node.command;
            let newType = 'str';

            const lookUp = ['/log/print', '/system/resource/print', '/interface/wireless/registration-table/print', '/system/reboot'];
            let value = parseInt($("#node-input-action").val() as string, 10);
            if (value < 0 || value > 3) {
                value = -1;
                newType = node["command-type"];
            }
            else
                cmd = lookUp[value];

            $("#node-input-command").typedInput('type', newType);
            $("#node-input-command").typedInput('value', cmd);

            $("#node-input-command-row").find('*').prop("disabled", value != -1);
        });

        $("#node-input-command").typedInput({
            default: "str",
            types: ["str", "json"],
            typeField: "#node-input-command-type"
        } as any)
    },
    oneditsave: function () {
        this.action = null;
    }
});