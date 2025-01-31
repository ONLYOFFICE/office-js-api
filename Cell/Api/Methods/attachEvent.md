# attachEvent

Subscribes to the specified event and calls the callback function when the event fires.

## Syntax

```javascript
expression.attachEvent(eventName, callback);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| eventName | Required | string |  | The event name. |
| callback | Required | function |  | Function to be called when the event fires. |

## Returns

This method doesn't return any data.

## Example

This example shows how to subscribe on "onWorksheetChange" event.

```javascript
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("1");
Api.attachEvent("onWorksheetChange", function(oRange){
	console.log("onWorksheetChange");
	console.log(oRange.GetAddress());
});
```
