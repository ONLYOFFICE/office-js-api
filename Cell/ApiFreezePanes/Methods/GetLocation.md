# GetLocation

Returns a range that describes the frozen cells in the active worksheet view.

## Syntax

```javascript
expression.GetLocation();
```

`expression` - A variable that represents a [ApiFreezePanes](../ApiFreezePanes.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

This example freezes first column and get pastes a freezed range address into the table.

```javascript editor-xlsx
// How to get location address of a freezed column.

// Get an address of a column from freezed panes and display it in the worksheet.

Api.SetFreezePanesType('column');
var oWorksheet = Api.GetActiveSheet();
var oFreezePanes = oWorksheet.GetFreezePanes();
var oRange = oFreezePanes.GetLocation();
oWorksheet.GetRange("A1").SetValue("Location: ");
oWorksheet.GetRange("B1").SetValue(oRange.GetAddress());
```
