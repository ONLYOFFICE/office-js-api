# detachEvent

Unsubscribes from the specified event.

## Syntax

```javascript
expression.detachEvent(eventName);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| eventName | Required | string |  | The event name. |

## Returns

This method doesn't return any data.

## Example

This example unsubscribes from the "onWorksheetChange" event.

```javascript
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("1");
Api.attachEvent("onWorksheetChange", function(oRange){
    console.log("onWorksheetChange");
    console.log(oRange.GetAddress());
});
Api.detachEvent("onWorksheetChange");
```
