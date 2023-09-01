# onWorksheetChange

The callback function which is called when the specified range of the current sheet changes.
<br>Please note that the event is not called for the undo/redo operations.

## Syntax

expression.attachEvent("asc_onHyperlinkClick", callback);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| eventName | Required | String | The event name. |
| callback | Required | Function | Function to be called when the event fires. |

## Example

This example shows how to subscribe on "onWorksheetChange" event.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("1");
Api.attachEvent("onWorksheetChange", function(oRange){
	console.log("onWorksheetChange");
	console.log(oRange.GetAddress());
});
builder.SaveFile("xlsx", "attachEvent.xlsx");
builder.CloseFile();
```