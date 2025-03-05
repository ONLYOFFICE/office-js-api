# GetValue

Returns a value of the specified range.

## Syntax

```javascript
expression.GetValue();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string \| string[][]

## Example

This example shows how to get a value of the specified range.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let value = worksheet.GetRange("A1").GetValue();
worksheet.GetRange("A3").SetValue("Value of the cell A1: ");
worksheet.GetRange("B3").SetValue(value);
```
