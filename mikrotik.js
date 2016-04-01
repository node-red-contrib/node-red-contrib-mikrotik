/**
 * Created by Bladerunner on 11/03/16.
 */
var mikrotik = require('mikronode');

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
                // action = msg.payload;
                action = '';
                break;

        }


        this.on('input', function(msg) {
            if (action == '') action = msg.payload;
            var connection = new mikrotik(ip, login, pass);
            connection.connect(function(conn) {

                var chan = conn.openChannel();

                chan.write(action, function() {
                    chan.on('done',function(data) {

                        var parsed = mikrotik.parseItems(data);

                        var pl = [];
                        parsed.forEach(function(item) {
                            pl.push(item);
                        });

                        msg.payload = pl;
                        node.send(msg);

                        chan.close();
                        conn.close();

                    });
                });
            });

        });
    }

    RED.nodes.registerType("mikrotik", NodeMikrotik, {
        credentials: {
            login: {type:"text"},
            pass: {type:"password"}
        }
    });
};






