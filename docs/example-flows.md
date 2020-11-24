# Example Flows

Here are some examples of flows to get faster into the usage of the RAW Mode

## Example of getting interface info

Where ***ETHER1INTERNET*** is name of interface

The injected message is:

```json
[
    "/interface/monitor-traffic",
    "=interface=ETHER1INTERNET",
    "=once=true"
]
```

<details>
<summary>Click to expand the full flow!</summary>
<pre>
[
    {
        "id": "34844337.ceefbc",
        "type": "mikrotik",
        "z": "f0d0173f.b4a34",
        "device": "",
        "name": "",
        "action": "9",
        "x": 680,
        "y": 2720,
        "wires": [
            [
                "dd3c5317.fd344"
            ]
        ]
    },
    {
        "id": "630604f7.ccb25c",
        "type": "inject",
        "z": "f0d0173f.b4a34",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "[\"/interface/monitor-traffic\",\"=interface=ETHER1INTERNET\",\"=once=true\"]",
        "payloadType": "json",
        "x": 550,
        "y": 2720,
        "wires": [
            [
                "34844337.ceefbc"
            ]
        ]
    },
    {
        "id": "dd3c5317.fd344",
        "type": "debug",
        "z": "f0d0173f.b4a34",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 850,
        "y": 2720,
        "wires": []
    }
]
</pre>
</details><br>

## Example of getting System/Health

The injected message is:

```json
[
    "/system/health/print"
]
```

<details>
<summary>Click to expand the full flow!</summary>
<pre>
[
    {
        "id": "4f3bd278.016564",
        "type": "mikrotik",
        "z": "f0d0173f.b4a34",
        "device": "",
        "name": "",
        "action": "9",
        "x": 760,
        "y": 3160,
        "wires": [
            [
                "712e010d.e3cc38"
            ]
        ]
    },
    {
        "id": "b42e32f5.6ce26",
        "type": "change",
        "z": "f0d0173f.b4a34",
        "name": "HEALTH",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "[\"/system/health/print\"]",
                "tot": "json"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 560,
        "y": 3160,
        "wires": [
            [
                "4f3bd278.016564"
            ]
        ]
    },
    {
        "id": "a0525925.11f17",
        "type": "inject",
        "z": "f0d0173f.b4a34",
        "name": "",
        "props": [
            {
                "p": "payload",
                "v": "",
                "vt": "date"
            },
            {
                "p": "topic",
                "v": "",
                "vt": "string"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 411,
        "y": 3156,
        "wires": [
            [
                "b42e32f5.6ce26"
            ]
        ]
    },
    {
        "id": "712e010d.e3cc38",
        "type": "debug",
        "z": "f0d0173f.b4a34",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 930,
        "y": 3160,
        "wires": []
    }
]
</pre>
</details><br>

## Example of running script

Where ***Alarm*** is name of script

The injected message is:

```json
[
    "/system/script/run",
    "=.id=Alarm"
]
```

<details>
<summary>Click to expand the full flow!</summary>
<pre>
[
    {
        "id": "aee77086.2d473",
        "type": "change",
        "z": "f0d0173f.b4a34",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "{\"command\":[\"/system/script/run\",\"=.id=Alarm\"]}",
                "tot": "json"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 680,
        "y": 3300,
        "wires": [
            [
                "378e1896.f530e"
            ]
        ]
    },
    {
        "id": "378e1896.f530e",
        "type": "mikrotik",
        "z": "f0d0173f.b4a34",
        "device": "",
        "name": "",
        "action": "9",
        "x": 900,
        "y": 3300,
        "wires": [
            []
        ]
    },
    {
        "id": "c5467461.d3301",
        "type": "inject",
        "z": "f0d0173f.b4a34",
        "name": "",
        "props": [
            {
                "p": "payload",
                "v": "",
                "vt": "date"
            },
            {
                "p": "topic",
                "v": "",
                "vt": "string"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 500,
        "y": 3300,
        "wires": [
            [
                "aee77086.2d473"
            ]
        ]
    }
]
</pre>
</details><br>

## Example of getting all DHCP leases

The injected message is:

```json
[
    "/ip/dhcp-server/lease/getall"
]
```

<details>
<summary>Click to expand the full flow!</summary>
<pre>
[
    {
        "id": "8916b5a8.ece7e",
        "type": "mikrotik",
        "z": "f0d0173f.b4a34",
        "device": "",
        "name": "",
        "action": "9",
        "x": 660,
        "y": 3120,
        "wires": [
            [
                "d569810b.f2ac7"
            ]
        ]
    },
    {
        "id": "8f7b1436.a771c8",
        "type": "inject",
        "z": "f0d0173f.b4a34",
        "name": "",
        "props": [
            {
                "p": "payload",
                "v": "{\"command\":[\"/ip/dhcp-server/lease/getall\"]}",
                "vt": "json"
            },
            {
                "p": "topic",
                "v": "",
                "vt": "string"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "[\"/ip/dhcp-server/lease/getall\"]",
        "payloadType": "json",
        "x": 350,
        "y": 3120,
        "wires": [
            [
                "7abcc01e.fcd3e8"
            ]
        ]
    },
    {
        "id": "d569810b.f2ac7",
        "type": "debug",
        "z": "f0d0173f.b4a34",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 810,
        "y": 3120,
        "wires": []
    },
    {
        "id": "7abcc01e.fcd3e8",
        "type": "change",
        "z": "f0d0173f.b4a34",
        "name": "All DHCP/lease",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "[\"/ip/dhcp-server/lease/getall\"]",
                "tot": "json"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 500,
        "y": 3120,
        "wires": [
            [
                "8916b5a8.ece7e"
            ]
        ]
    }
]
</pre>
</details><br>
