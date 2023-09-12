# NumberFormat

Sets a value that represents the format code for the object.

## Syntax

expression.NumberFormat &#124; expression.NumberFormat = sFormat;

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sFormat | Required | [XlNumberFormat](../../../Enumerations/XlNumberFormat.md) | Specifies the mask applied to the number in the cell. |

## Returns

[XlNumberFormat](../../../Enumerations/XlNumberFormat.md) &#124; null (returns null if all cells in the specified range don't have the same number format)

## Example

This example specifies whether a number in the cell should be treated like number, currency, date, time, etc. or just like text.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetColumnWidth(0, 30);
oWorksheet.SetColumnWidth(1, 30);
oWorksheet.GetRange("A2").NumberFormat = "General";
oWorksheet.GetRange("A2").SetValue("123456");
oWorksheet.GetRange("B2").SetValue("General");
oWorksheet.GetRange("A3").NumberFormat = "0.00";
oWorksheet.GetRange("A3").SetValue("123456");
oWorksheet.GetRange("B3").SetValue("Number");
builder.SaveFile("xlsx", "NumberFormat.xlsx");
builder.CloseFile();
```