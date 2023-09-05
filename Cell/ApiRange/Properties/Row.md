# Row

Returns the row number for the selected cell. **Read-only**

## Syntax

expression.Row;

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Returns

Number

## Example

This example shows how to get a row number for the selected cell.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A9").Row;
oWorksheet.GetRange("A2").SetValue(oRange.toString());
builder.SaveFile("xlsx", "Row.xlsx");
builder.CloseFile();
```