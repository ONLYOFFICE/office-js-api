# ISFORMULA

Checks whether a reference is to a cell containing a formula, and returns TRUE or FALSE.

## Syntax

expression.ISFORMULA(arg1);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | Is a reference to the cell you want to test.  Reference can be a cell reference, a formula, or name that refers to a cell. |

## Returns

number, string, boolean

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
