# RecalculateAllFormulas

Recalculates all formulas in the active workbook.

## Syntax

```javascript
expression.RecalculateAllFormulas(fLogger);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fLogger | Required | function |  | A function which specifies the logger object for checking recalculation of formulas. |

## Returns

boolean

## Example

This example recalculates all formulas in the active workbook.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B1").SetValue(1);
worksheet.GetRange("C1").SetValue(2);
let range = worksheet.GetRange("A1");
range.SetValue("=SUM(B1:C1)");
range = worksheet.GetRange("E1");
range.SetValue("=A1+1");
worksheet.GetRange("B1").SetValue(3);
Api.RecalculateAllFormulas();
worksheet.GetRange("A3").SetValue("Formulas from cells A1 and E1 were recalculated with a new value from cell C1.");
```
