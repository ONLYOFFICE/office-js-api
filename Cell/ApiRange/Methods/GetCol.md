# GetCol

Returns a column number for the selected cell.

## Syntax

expression.GetCol();

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Number

## Example

This example shows how to get a column number for the selected cell.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("D9").GetCol();
oWorksheet.GetRange("A2").SetValue(oRange.toString());
builder.SaveFile("xlsx", "GetCol.xlsx");
builder.CloseFile();
```