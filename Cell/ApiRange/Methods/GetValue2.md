# GetValue2

Returns the Value2 property (value without format) of the specified range.

## Syntax

```javascript
expression.GetValue2();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string | string[][]

## Example

This example shows how to get the value without format of the specified range.

```javascript
var oWorksheet = Api.GetActiveSheet();
var oFormat = Api.Format("123456", "$#,##0");
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue(oFormat);
var sValue2 = oRange.GetValue2();
oWorksheet.GetRange("A3").SetValue("Value of the cell A1 without format: " + sValue2);
```
