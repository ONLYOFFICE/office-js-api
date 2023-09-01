# RecalculateAllFormulas

Recalculates all formulas in the active workbook.

## Syntax

expression.RecalculateAllFormulas(fLogger);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| fLogger | Required | Function | A function which specifies the logger object for checking recalculation of formulas. |

## Returns

Boolean

## Example

This example recalculates all formulas in the active workbook.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("B1").SetValue(1);
oWorksheet.GetRange("C1").SetValue(2);
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("=SUM(B1:C1)");
oRange = oWorksheet.GetRange("E1");
oRange.SetValue("=A1+1");
oWorksheet.GetRange("B1").SetValue(3);
Api.RecalculateAllFormulas();
oWorksheet.GetRange("A3").SetValue("Formulas from cells A1 and E1 were recalculated with a new value from cell C1.");
builder.SaveFile("xlsx", "RecalculateAllFormulas.xlsx");
builder.CloseFile();
```