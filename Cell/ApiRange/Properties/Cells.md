# Cells

Returns a Range object that represents all the cells in the specified range or a specified cell. **Read-only**

## Syntax

expression.Cells;

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Returns

[ApiRange](../ApiRange.md)

## Example

This example shows how to get a Range object that represents all the cells in the specified range or a specified cell.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1:C3");
oRange.Cells.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
builder.SaveFile("xlsx", "Cells.xlsx");
builder.CloseFile();
```