# Rows

Returns ApiRange that represents all the cells of the rows range. **Read-only**

## Syntax

expression.Rows;

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Returns

[ApiRange](../../ApiRange.md)

## Example

This example shows how to get the ApiRange object that represents all the cells on the rows range.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.Rows.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
builder.SaveFile("xlsx", "Rows.xlsx");
builder.CloseFile();
```