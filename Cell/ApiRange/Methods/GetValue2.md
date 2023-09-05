# GetValue2

Returns the Value2 property (value without format) of the specified range.

## Syntax

expression.GetValue2();

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String &#124; Array<Array<String>>

## Example

This example shows how to get the value without format of the specified range.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFormat = Api.Format("123456", ["$#,##0"]);
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue(oFormat);
var sValue2 = oRange.GetValue2();
oWorksheet.GetRange("A3").SetValue("Value of the cell A1 without format: " + sValue2);
builder.SaveFile("xlsx", "GetValue2.xlsx");
builder.CloseFile();
```