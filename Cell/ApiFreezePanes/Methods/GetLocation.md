# GetLocation

Gets a range that describes the frozen cells in the active worksheet view.

## Syntax

expression.GetLocation();

`expression` - A variable that represents a [ApiFreezePanes](../ApiFreezePanes.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md) &#124; null (returns null if there is no frozen pane.)

## Example

This example freezes first column and get pastes a freezed range address into the table.

```javascript
builder.CreateFile("xlsx");
Api.FreezePanes('column');
var oWorksheet = Api.GetActiveSheet();
var oFreezePanes = oWorksheet.GetFreezePanes();
var oRange = oFreezePanes.GetLocation();
oWorksheet.GetRange("A1").SetValue("Location: ");
oWorksheet.GetRange("B1").SetValue(oRange.GetAddress());
builder.SaveFile("xlsx", "GetLocation.xlsx");
builder.CloseFile();
```