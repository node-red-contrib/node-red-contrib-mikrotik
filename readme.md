
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

### Example of getting interface info
 Where ***ether1internet*** is name of interface 
 
`[{"id":"34844337.ceefbc","type":"mikrotik","z":"f0d0173f.b4a34","device":"","name":"","action":"9","x":680,"y":2720,"wires":[["dd3c5317.fd344"]]},{"id":"630604f7.ccb25c","type":"inject","z":"f0d0173f.b4a34","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"{\"command\":[\"/interface/monitor-traffic\",\"=interface=ether1internet\",\"=once=true\"]}","payloadType":"json","x":550,"y":2720,"wires":[["34844337.ceefbc"]]},{"id":"dd3c5317.fd344","type":"debug","z":"f0d0173f.b4a34","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","statusVal":"","statusType":"auto","x":850,"y":2720,"wires":[]}]`



### Example of getting System/Health

`[{"id":"4f3bd278.016564","type":"mikrotik","z":"f0d0173f.b4a34","device":"","name":"","action":"9","x":760,"y":3160,"wires":[["712e010d.e3cc38"]]},{"id":"b42e32f5.6ce26","type":"change","z":"f0d0173f.b4a34","name":"HEALTH","rules":[{"t":"set","p":"payload","pt":"msg","to":"{\"command\":[\"/system/health/print\"]}","tot":"json"}],"action":"","property":"","from":"","to":"","reg":false,"x":560,"y":3160,"wires":[["4f3bd278.016564"]]},{"id":"a0525925.11f17","type":"inject","z":"f0d0173f.b4a34","name":"","props":[{"p":"payload","v":"","vt":"date"},{"p":"topic","v":"","vt":"string"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"","payloadType":"date","x":411,"y":3156,"wires":[["b42e32f5.6ce26"]]},{"id":"712e010d.e3cc38","type":"debug","z":"f0d0173f.b4a34","name":"","active":false,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":930,"y":3160,"wires":[]}]`


###  Example of running script

 Where ***Alarm*** is name of script
 
`[{"id":"aee77086.2d473","type":"change","z":"f0d0173f.b4a34","name":"","rules":[{"t":"set","p":"payload","pt":"msg","to":"{\"command\":[\"/system/script/run\",\"=.id=Alarm\"]}","tot":"json"}],"action":"","property":"","from":"","to":"","reg":false,"x":680,"y":3300,"wires":[["378e1896.f530e"]]},{"id":"378e1896.f530e","type":"mikrotik","z":"f0d0173f.b4a34","device":"","name":"","action":"9","x":900,"y":3300,"wires":[[]]},{"id":"c5467461.d3301","type":"inject","z":"f0d0173f.b4a34","name":"","props":[{"p":"payload","v":"","vt":"date"},{"p":"topic","v":"","vt":"string"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"","payloadType":"date","x":500,"y":3300,"wires":[["aee77086.2d473"]]}]`
