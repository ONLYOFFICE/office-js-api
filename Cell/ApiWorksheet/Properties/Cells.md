# Cells

Returns ApiRange that represents all the cells on the worksheet (not just the cells that are currently in use). **Read-only**

## Syntax

expression.Cells;

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Returns

[ApiRange](../../ApiRange.md)

## Example

This example shows how to get the ApiRange that represents all the cells on the worksheet.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oCells = oWorksheet.Cells;
oCells.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
builder.SaveFile("xlsx", "Cells.xlsx");
builder.CloseFile();
```