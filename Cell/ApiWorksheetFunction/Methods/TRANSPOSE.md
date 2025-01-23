# TRANSPOSE

Converts a vertical range of cells to a horizontal range, or vice versa.

## Syntax

expression.TRANSPOSE(arg1);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | array |  | A range of cells on a worksheet or an array that will be transposed. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue("Ann");
oWorksheet.GetRange("A2").SetValue("Bob");
oWorksheet.GetRange("B1").SetValue("Apples");
oWorksheet.GetRange("B2").SetValue("Oranges");
var oRange = oWorksheet.GetRange("A1:B2");
oWorksheet.GetRange("A4:B5").SetValue(oFunction.TRANSPOSE(oRange));
```
