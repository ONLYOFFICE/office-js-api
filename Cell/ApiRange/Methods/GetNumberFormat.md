# GetNumberFormat

Returns a value that represents the format code for the current range.

## Syntax

expression.GetNumberFormat();

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[XlNumberFormat](../../../Enumerations/XlNumberFormat.md) &#124; null (returns null if all cells in the specified range don't have the same number format)

## Example

This example shows how to get a value that represents the format code for the current range.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B2");
oRange.SetValue(3);
var sFormat = oRange.GetNumberFormat();
oWorksheet.GetRange("B3").SetValue("Number format: " + sFormat);
builder.SaveFile("xlsx", "GetNumberFormat.xlsx");
builder.CloseFile();
```