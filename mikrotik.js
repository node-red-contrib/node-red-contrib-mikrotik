/**
 * Created by Bladerunner on 11/03/16.
 */
var mikrotik = require('mikronode-ng');

module.exports = function(RED) {
    function NodeMikrotikDevice(n) {
        RED.nodes.createNode(this, n);
        this.host = n.host;
        this.port = n.port;
        this.username = n.username;
        this.password = n.password;
    }
    RED.nodes.registerType("mikrotik-device", NodeMikrotikDevice);


    function NodeMikrotik(config) {
        RED.nodes.createNode(this,config);

        this.device = RED.nodes.getNode(config.device);
        this.action = config.action;

        var node = this;
        var host = this.device.host;
        var port = this.device.port;
        var username = this.device.username;
        var password = this.device.password;

        var command;

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

        this.on('input', function(msg) {
            var cmd = command;

            if (command == '') cmd = msg.payload;
            if (cmd == '') return false;
            
            if (cmd.command) cmd = cmd.command;
            
            
            connection = mikrotik.getConnection(host, username, password, {closeOnDone : true, port: port});
            connection.getConnectPromise().then(function(conn) {
                    conn.getCommandPromise(cmd).then(function resolved(values) {

                            var parsed = mikrotik.parseItems(values);
                            var pl = [];
                            parsed.forEach(function(item) {
                                pl.push(item);
                            });
                            msg.payload = values;

                            msg.command = cmd;
                            msg.success = true;
                            node.send(msg);
                    }, function rejected(reason) {
                        node.error('Error executing cmd['+cmd+']: ' + JSON.stringify(reason));
                    });
                },
                function(err) {
                    node.error("Connection error: " + err);
                }
            );
        });

        this.on('close', function() {
            connection && connection.connected && connection.close(true);
        });
    }

    RED.nodes.registerType("mikrotik", NodeMikrotik);
};






