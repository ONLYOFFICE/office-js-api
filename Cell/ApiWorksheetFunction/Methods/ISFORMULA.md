# ISFORMULA

Checks whether a reference to a cell contains a formula, and returns **true** or **false**.

## Syntax

expression.ISFORMULA(arg1);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) |  | A cell range to test. This argument can be a range or a range name. |

## Returns

boolean

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();

// Set the formula in cell B3
oWorksheet.GetRange("B3").SetValue("=SUM(5, 6)");

// Check if there is a formula in C3
var oFunction = Api.GetWorksheetFunction();
var result = oFunction.ISFORMULA(oWorksheet.GetRange("B3"));
oWorksheet.GetRange("C3").SetValue(result);

```
