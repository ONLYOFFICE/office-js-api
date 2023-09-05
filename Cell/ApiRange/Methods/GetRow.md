# GetRow

Returns a row number for the selected cell.

## Syntax

expression.GetRow();

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Number

## Example

This example shows how to get a row number for the selected cell.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A9").GetRow();
oWorksheet.GetRange("A2").SetValue(oRange.toString());
builder.SaveFile("xlsx", "GetRow.xlsx");
builder.CloseFile();
```