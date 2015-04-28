## Overview
Description is missing
## API
##GET {{DISPATCHER}}/device/api/listdevices?userid={{USER_TOKEN}}
Used to return the list of the devices per specific user
### Request Headers
Content-Type: application/json
x-userprofile: {"userId" : "c23fc738-dc88-11e4-bc41-02075893d5ca" }
Authorization: user {{USER}}

### Query Parameters
<table>
<tr><td>Name</td></tr>
<tr><td>userid=%7B%7BUSER_TOKEN%7D%7D</td></tr>
</table>
<br>
<hr>
##POST {{DISPATCHER}}/device/api/createdevice?deviceid={{DEVICE_ID}}&type=displayType
Used to create a new device
### Request Headers
Content-Type: application/json
x-userprofile: {"userId" : "c23fc738-dc88-11e4-bc41-02075893d5ca" }
Authorization: user {{USER}}

### Query Parameters
<table>
<tr><td>Name</td></tr>
<tr><td>deviceid=%7B%7BDEVICE_ID%7D%7D&type=displayType</td></tr>
</table>

### Sample Request Payloads
```
{
  "vendorMetadata": {
    "name": "LGE"
  },
  "unitMetadata": {
    "verticalSide": "side1",
    "side1": 1000,
    "side2": 1000
  },
  "state": {
    "power": {
      "activityFSMState": {
        "state": "xxx"
      },
      "cloudModel": {
        "data": {
          "batteryPercentage": 100
        }
      },
      "deviceModel": {
        "data": {
          "batteryPercentage": 100
        }
      }
    }
  }
}
```


<br>
<hr>
##POST {{DISPATCHER}}/device/api/requeststatechange
Sends the state change for either:
1. displaySurface,
2. power,
3. network,
4. brightness

### Request Headers
Content-Type: application/json
x-userprofile: {"userId" : "c23fc738-dc88-11e4-bc41-02075893d5ca" }
Authorization: user {{USER}}


### Sample Request Payloads
```
{
  "deviceId": "54:E4:BD:46:13:14",
  "stateContainer": "displaySurface",
  "replacing": {
    "cloudModel": "7fda2e4b-1598-45a9-91d7-ac83f0ffed92"
  },
  "cloudModel": {
    "data": {
      "version": "v1",
      "name": "whatever",
      "providerMetadata": {
        "memberidtype": "artistid"
      }
    }
  }
}
```


<br>
<hr>
##POST {{DISPATCHER}}/device/api/registerdevice
Used to register a device with a specific user
### Request Headers
Content-Type: application/json
x-userprofile: {"userId" : "c23fc738-dc88-11e4-bc41-02075893d5ca" }
Authorization: user {{USER}}


### Sample Request Payloads
```
{
  "userId": "c23fc738-dc88-11e4-bc41-02075893d5ca",
  "deviceId": "54:E4:BD:46:13:14",
  "name": "Gina device"
}
```


<br>
<hr>
##DELETE {{DISPATCHER}}/device/api/unregisterdevice
Used to unregister a device from specific user
### Request Headers
Content-Type: application/json
x-userprofile: {"userId" : "c23fc738-dc88-11e4-bc41-02075893d5ca" }
Authorization: user {{USER}}


### Sample Request Payloads
```
{
  "userId": "c23fc738-dc88-11e4-bc41-02075893d5ca",
  "deviceId": "54:E4:BD:46:13:14"
}
```


<br>
<hr>
##GET {{DISPATCHER}}/device/api/getdevicemetadata?deviceid={{DEVICE_ID}}
Used to return the metadata for specific device
### Request Headers
Content-Type: application/json
x-userprofile: {"userId" : "c23fc738-dc88-11e4-bc41-02075893d5ca" }
Authorization: user {{USER}}

### Query Parameters
<table>
<tr><td>Name</td></tr>
<tr><td>deviceid=%7B%7BDEVICE_ID%7D%7D</td></tr>
</table>
<br>
<hr>
##DELETE {{DISPATCHER}}/device/api/removedevice?deviceid={{DEVICE_ID}}
Used to delete a device
### Request Headers
Content-Type: application/json
x-userprofile: {"userId" : "c23fc738-dc88-11e4-bc41-02075893d5ca" }
Authorization: user {{USER}}

### Query Parameters
<table>
<tr><td>Name</td></tr>
<tr><td>deviceid=%7B%7BDEVICE_ID%7D%7D</td></tr>
</table>
<br>
<hr>
##POST {{DISPATCHER}}/device/api/requeststatechange
Request state change for scale transform.
See QT documentation:
http://doc.qt.io/qt-4.8/qml-scale.html
### Request Headers
Content-Type: application/json
x-userprofile: {"userId" : "c23fc738-dc88-11e4-bc41-02075893d5ca" }
Authorization: user {{USER}}


### Sample Request Payloads
```
{
  "deviceId": "54:E4:BD:46:13:14",
  "stateContainer": "displaySurface",
  "replacing": {
    "cloudModel": "7fda2e4b-1598-45a9-91d7-ac83f0ffed92"
  },
  "cloudModel": {
    "data": {
      "transform": {
        "Scale": {
          "origin_x": "25",
          "origin_y": "25",
          "xScale": "3"
        }
      }
    }
  }
}
```


<br>
<hr>
##POST {{DISPATCHER}}/device/api/requeststatechange
This call should be made 
from QT application (A4 app)
at heartbeat rate, 
e.g. tt should send the battery 
percentage
### Request Headers
Content-Type: application/json
x-userprofile: {"userId" : "c23fc738-dc88-11e4-bc41-02075893d5ca" }
Authorization: user {{USER}}


### Sample Request Payloads
```
{
  "deviceId": "54:E4:BD:46:13:14",
  "stateContainer": "power",
  "replacing": {
    "deviceModel": "253d49b4-e0a0-447f-a959-52079ec0fdf3"
  },
  "deviceModel": {
    "data": {
      "batteryPercentage": 11
    }
  }
}
```


<br>
<hr>
