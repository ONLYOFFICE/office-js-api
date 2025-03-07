# GetFormula

Returns a formula of the specified range.

## Syntax

```javascript
expression.GetFormula();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string \| string[][]

## Example

This example shows how to get a formula of the specified range.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B1").SetValue(1);
worksheet.GetRange("C1").SetValue(2);
let range = worksheet.GetRange("A1");
range.SetValue("=SUM(B1:C1)");
let formula = range.GetFormula();
worksheet.GetRange("A3").SetValue("Formula from cell A1: " + formula);
```
