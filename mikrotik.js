/**
 * Created by Bladerunner on 11/03/16.
 */
var mikrotik = require('mikronode-ng');

module.exports = function(RED) {
    function NodeMikrotik(config) {
        RED.nodes.createNode(this,config);
        this.action = config.action;
        this.ip = config.ip;
        this.action = config.action;

        var node = this;
        var ip = node.ip;
        var login = node.credentials.login;
        var pass = node.credentials.pass;
        var action;

        switch (parseInt(node.action)) {
            case 0:
                action = '/log/print';
                break;
            case 1:
                action = '/system/resource/print';
                break;
            case 2:
                action = '/interface/wireless/registration-table/print';
                break;
            case 3:
                action = '/system/reboot';
                break;
            case 9:
                action = '';
                break;
        }

        var connection = null;

        this.on('input', function(msg) {
            if (action == '') action = msg.payload;
            if(action == '') return false;
            connection = mikrotik.getConnection(ip, login, pass, {closeOnDone : true});
            connection.getConnectPromise().then(function(conn) {
                    conn.getCommandPromise(action).then(function resolved(values) {
                            var parsed = mikrotik.parseItems(values);
                            var pl = [];
                            parsed.forEach(function(item) {
                                pl.push(item);
                            });
                            msg.payload = values;
                            node.send(msg);
                    }, function rejected(reason) {
                        node.error('Error executing cmd['+action+']: ' + JSON.stringify(reason));
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

    RED.nodes.registerType("mikrotik", NodeMikrotik, {
        credentials: {
            login: {type:"text"},
            pass: {type:"password"}
        }
    });
};






