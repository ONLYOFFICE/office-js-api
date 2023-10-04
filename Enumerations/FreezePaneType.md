# FreezePaneType

Specifies freeze panes type.

## Type

String &#124; null

## Properties

- "row" - freeze top row.
- "column" - freeze firs column.
- "cell" - freeze panes by current cell.
- null - unfreeze panes.

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
builder.SaveFile("xlsx", "FreezePanes.xlsx");
builder.CloseFile();
```