# T_INV_2T

Returns the two-tailed inverse of the Student's t-distribution.

## Syntax

```javascript
expression.T_INV_2T(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The probability associated with the two-tailed Student's t-distribution, a number between 0 and 1 inclusive. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A positive integer indicating the number of degrees of freedom to characterize the distribution. |

## Returns

number

## Example

This example shows how to return the two-tailed inverse of the Student's t-distribution.

```javascript editor-xlsx
// How to calculate the two-tailed inverse of Student's t-distribution.

// Use a function to estimate the Student's t-distribution two-tailed inverse.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.T_INV_2T(0.5, 10));
```
