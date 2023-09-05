# SetNumberFormat

Specifies whether a number in the cell should be treated like number, currency, date, time, etc. or just like text.

## Syntax

expression.SetNumberFormat(sFormat);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sFormat | Required | [XlNumberFormat](../../../Enumerations/XlNumberFormat.md) | Specifies the mask applied to the number in the cell. |

## Returns

This method doesn't return any data.

## Example

This example specifies whether a number in the cell should be treated like number, currency, date, time, etc. or just like text.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetColumnWidth(0, 30);
oWorksheet.SetColumnWidth(1, 30);
oWorksheet.GetRange("A2").SetNumberFormat("General");
oWorksheet.GetRange("A2").SetValue("123456");
oWorksheet.GetRange("B2").SetValue("General");
oWorksheet.GetRange("A3").SetNumberFormat("0.00");
oWorksheet.GetRange("A3").SetValue("123456");
oWorksheet.GetRange("B3").SetValue("Number");
oWorksheet.GetRange("A4").SetNumberFormat("$#,##0.00");
oWorksheet.GetRange("A4").SetValue("123456");
oWorksheet.GetRange("B4").SetValue("Currency");
oWorksheet.GetRange("A5").SetNumberFormat("_($* #,##0.00_)");
oWorksheet.GetRange("A5").SetValue("123456");
oWorksheet.GetRange("B5").SetValue("Accounting");
oWorksheet.GetRange("A6").SetNumberFormat("m/d/yyyy");
oWorksheet.GetRange("A6").SetValue("123456");
oWorksheet.GetRange("B6").SetValue("DateShort");
oWorksheet.GetRange("A7").SetNumberFormat("[$-F800]dddd, mmmm dd, yyyy");
oWorksheet.GetRange("A7").SetValue("123456");
oWorksheet.GetRange("B7").SetValue("DateLong");
oWorksheet.GetRange("A8").SetNumberFormat("[$-F400]h:mm:ss AM/PM");
oWorksheet.GetRange("A8").SetValue("123456");
oWorksheet.GetRange("B8").SetValue("Time");
oWorksheet.GetRange("A9").SetNumberFormat("0.00%");
oWorksheet.GetRange("A9").SetValue("123456");
oWorksheet.GetRange("B9").SetValue("Percentage");
oWorksheet.GetRange("A10").SetNumberFormat("0%");
oWorksheet.GetRange("A10").SetValue("123456");
oWorksheet.GetRange("B10").SetValue("Percent");
oWorksheet.GetRange("A11").SetNumberFormat("# ?/?");
oWorksheet.GetRange("A11").SetValue("123456");
oWorksheet.GetRange("B11").SetValue("Fraction");
oWorksheet.GetRange("A12").SetNumberFormat("0.00E+00");
oWorksheet.GetRange("A12").SetValue("123456");
oWorksheet.GetRange("B12").SetValue("Scientific");
oWorksheet.GetRange("A13").SetNumberFormat("@");
oWorksheet.GetRange("A13").SetValue("123456");
oWorksheet.GetRange("B13").SetValue("Text");
builder.SaveFile("xlsx", "SetNumberFormat.xlsx");
builder.CloseFile();
```