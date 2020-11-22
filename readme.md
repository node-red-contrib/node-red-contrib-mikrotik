node-red-contrib-mikrotik
=======


<p>A <a href="http://nodered.org" target="_new">Node-RED</a> node that provides API for Mikrotik WiFi routers.(>RouterOS6.43)</p>
This is an alfa verion.

-------
# Installation
[![NPM](https://nodei.co/npm/node-red-contrib-mikrotik.png?downloads=true)](https://nodei.co/npm/node-red-contrib-mikrotik/)

You can install the nodes using node-red's "Manage palette" in the side bar.

Or run the following command in the root directory of your Node-RED installation

    npm install node-red-contrib-mikrotik 
	
# Config

Available actions: 
- ***log***
- ***resources***
- ***wifi***
- ***connections***
- ***reboot*** 
- ***raw***

# Usage
## Basics


-----

## RAW

### Example for interface info
 Where ***ether1internet*** is name of interface 
`[{"id":"34844337.ceefbc","type":"mikrotik","z":"f0d0173f.b4a34","device":"","name":"","action":"9","x":680,"y":2720,"wires":[["dd3c5317.fd344"]]},{"id":"630604f7.ccb25c","type":"inject","z":"f0d0173f.b4a34","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"{\"command\":[\"/interface/monitor-traffic\",\"=interface=ether1internet\",\"=once=true\"]}","payloadType":"json","x":550,"y":2720,"wires":[["34844337.ceefbc"]]},{"id":"dd3c5317.fd344","type":"debug","z":"f0d0173f.b4a34","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","statusVal":"","statusType":"auto","x":850,"y":2720,"wires":[]}]`
