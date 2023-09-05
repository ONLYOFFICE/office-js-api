# GetValue

Returns a value of the specified range.

## Syntax

expression.GetValue();

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String &#124; Array<Array<String>>

## Example

This example shows how to get a value of the specified range.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var sValue = oWorksheet.GetRange("A1").GetValue();
oWorksheet.GetRange("A3").SetValue("Value of the cell A1: ");
oWorksheet.GetRange("B3").SetValue(sValue);
builder.SaveFile("xlsx", "GetValue.xlsx");
builder.CloseFile();
```