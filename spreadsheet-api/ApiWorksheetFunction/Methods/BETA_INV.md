# BETA_INV

Returns the inverse of the cumulative beta probability density function (BETA_DIST).

## Syntax

```javascript
expression.BETA_INV(arg1, arg2, arg3, arg4, arg5);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A probability associated with the beta distribution. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The alpha parameter of the distribution which must be greater than 0. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The beta parameter of the distribution which must be greater than 0. |
| arg4 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | An optional lower bound to the interval of x (A). If omitted, it is equal to 0. |
| arg5 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | An optional upper bound to the interval of x (B). If omitted, it is equal to 1. |

## Returns

number

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.BETA_INV(0.2, 4, 5);
worksheet.GetRange("B2").SetValue(ans);
```
