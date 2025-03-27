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

string \| string[][]

## Example

This example shows how to get the value without format of the specified range.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let format = Api.Format("123456", "$#,##0");
let range = worksheet.GetRange("A1");
range.SetValue(format);
let value2 = range.GetValue2();
worksheet.GetRange("A3").SetValue("Value of the cell A1 without format: " + value2);
```
