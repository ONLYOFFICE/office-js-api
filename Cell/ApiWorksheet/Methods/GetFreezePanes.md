# GetFreezePanes

Returns the freeze panes from the current worksheet.

## Syntax

expression.GetFreezePanes();

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiFreezePanes](../../ApiFreezePanes/ApiFreezePanes.md)

## Example

This example freezes first column and get pastes a freezed range address into the table.

```javascript
Api.SetFreezePanesType('column');
var oWorksheet = Api.GetActiveSheet();
var oFreezePanes = oWorksheet.GetFreezePanes();
var oRange = oFreezePanes.GetLocation();
oWorksheet.GetRange("A1").SetValue("Location: ");
oWorksheet.GetRange("B1").SetValue(oRange.GetAddress());
```
