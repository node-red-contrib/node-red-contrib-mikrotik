
[![CLA assistant](https://cla-assistant.io/readme/badge/node-red-contrib/node-red-contrib-mikrotik)](https://cla-assistant.io/node-red-contrib/node-red-contrib-mikrotik)
![compile](https://github.com/node-red-contrib/node-red-contrib-mikrotik/workflows/compile/badge.svg)
[![CodeFactor](https://www.codefactor.io/repository/github/node-red-contrib/node-red-contrib-mikrotik/badge)](https://www.codefactor.io/repository/github/node-red-contrib/node-red-contrib-mikrotik)
[![npm version](https://badge.fury.io/js/node-red-contrib-mikrotik.svg)](https://badge.fury.io/js/node-red-contrib-mikrotik)
# node-red-contrib-mikrotik a mikrotik node for Node-RED

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

Add the node to a flow, add an inject and a debug node, configure your connection and you are ready to go.

If you can override every property with the message object. The names are:

msg. -> username, password, host, port, payload/command

### Basic

TBD

-----

### RAW

For the usage of the RAW/Command mode there are [here](docs/example-flows.md) some examples.
