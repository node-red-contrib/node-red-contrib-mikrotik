import { EditorRED, EditorNodeDef } from "node-red";
declare var RED: EditorRED;

RED.nodes.registerType('mikrotik', {
    category: 'network',
    color: '#E9967A',
    defaults: {
        device: { value: '', type: "mikrotik-device" },
        name: { value: '' },
        action: { value: '0' }
    },
    inputs: 1,
    outputs: 1,
    icon: "feed.png",
    label: function () {
        return this.name || "mikrotik";
    }
});