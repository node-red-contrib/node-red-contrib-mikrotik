
[![CLA assistant](https://cla-assistant.io/readme/badge/node-red-contrib/node-red-contrib-mikrotik)](https://cla-assistant.io/node-red-contrib/node-red-contrib-mikrotik)
![compile](https://github.com/node-red-contrib/node-red-contrib-mikrotik/workflows/compile/badge.svg)
[![CodeFactor](https://www.codefactor.io/repository/github/node-red-contrib/node-red-contrib-mikrotik/badge)](https://www.codefactor.io/repository/github/node-red-contrib/node-red-contrib-mikrotik)
[![npm version](https://badge.fury.io/js/node-red-contrib-mikrotik.svg)](https://badge.fury.io/js/node-red-contrib-mikrotik)
# mikrotik node for Node-RED
=======
node-red-contrib-mikrotik
=======

## Install
[![NPM](https://nodei.co/npm/node-red-contrib-mikrotik.png?downloads=true)](https://nodei.co/npm/node-red-contrib-mikrotik/)


Install via the palette manage in the Node-RED admin ui (no restart needed).

Alternatively run the following command in your Node-RED user directory (typically `~/.node-red`):

```sh
npm install node-red-contrib-mikrotik
```

then restart Node-RED and add an instance of the mikrotik node.

# Config

Available actions: 
- ***log***
- ***resources***
- ***wifi***
- ***connections***
- ***reboot*** 
- ***raw***

## Usage


### Basic

TBD

-----

### RAW

### Example for interface info
 Where ***ether1internet*** is name of interface 
`[{"id":"34844337.ceefbc","type":"mikrotik","z":"f0d0173f.b4a34","device":"","name":"","action":"9","x":680,"y":2720,"wires":[["dd3c5317.fd344"]]},{"id":"630604f7.ccb25c","type":"inject","z":"f0d0173f.b4a34","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"{\"command\":[\"/interface/monitor-traffic\",\"=interface=ether1internet\",\"=once=true\"]}","payloadType":"json","x":550,"y":2720,"wires":[["34844337.ceefbc"]]},{"id":"dd3c5317.fd344","type":"debug","z":"f0d0173f.b4a34","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","statusVal":"","statusType":"auto","x":850,"y":2720,"wires":[]}]`



