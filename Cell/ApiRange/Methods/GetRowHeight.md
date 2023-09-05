# GetRowHeight

Returns the row height value.

## Syntax

expression.GetRowHeight();

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[pt](../../../Enumerations/pt.md)

## Example

This example shows how to get the row height value.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var nHeight = oWorksheet.GetRange("A1").GetRowHeight();
oWorksheet.GetRange("A1").SetValue("Height: ");
oWorksheet.GetRange("B1").SetValue(nHeight);
builder.SaveFile("xlsx", "GetRowHeight.xlsx");
builder.CloseFile();
```