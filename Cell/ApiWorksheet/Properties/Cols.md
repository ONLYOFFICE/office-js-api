# Cols

Returns ApiRange that represents all the cells of the columns range. **Read-only**

## Syntax

expression.Cols;

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Returns

[ApiRange](../../ApiRange.md)

## Example

This example shows how to get the ApiRange object that represents all the cells on the columns range.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oCols = oWorksheet.Cols;
oCols.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
builder.SaveFile("xlsx", "Cols.xlsx");
builder.CloseFile();
```