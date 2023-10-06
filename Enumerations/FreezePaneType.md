# FreezePaneType

Specifies freeze panes type.

## Type

String &#124; null

## Properties

- "row" - freeze top row &#124; if current freeze type is row.
- "column" - freeze firs column &#124; if current freeze type is column.
- "cell" - freeze panes by current cell &#124; if current freeze type is cell.
- null - unfreeze panes &#124; if there is no frozen pane.

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