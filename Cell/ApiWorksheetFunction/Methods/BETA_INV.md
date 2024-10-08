# BETA_INV

Returns the inverse of the cumulative beta probability density function (BETA_DIST).

## Syntax

expression.BETA_INV(arg1, arg2, arg3, arg4, arg5);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | A probability associated with the beta distribution. |
| arg2 | Required | number |  | The alpha parameter of the distribution which must be greater than 0. |
| arg3 | Required | number |  | The beta parameter of the distribution which must be greater than 0. |
| arg4 | Required | number |  | An optional lower bound to the interval of x (A). If omitted, it is equal to 0. |
| arg5 | Required | number |  | An optional upper bound to the interval of x (B). If omitted, it is equal to 1. |

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.BETA_INV(0.2, 4, 5);
oWorksheet.GetRange("B2").SetValue(ans);
```
