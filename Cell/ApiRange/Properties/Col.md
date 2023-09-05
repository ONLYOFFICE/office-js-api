# Col

Returns the column number for the selected cell. **Read-only**

## Syntax

expression.Col;

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Returns

Number

## Example

This example shows how to get a column number for the selected cell.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("D9").Col;
oWorksheet.GetRange("A2").SetValue(oRange.toString());
builder.SaveFile("xlsx", "Col.xlsx");
builder.CloseFile();
```