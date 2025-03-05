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

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("1");
Api.attachEvent("onWorksheetChange", function(range){
    console.log("onWorksheetChange");
    console.log(range.GetAddress());
});
Api.detachEvent("onWorksheetChange");
```
