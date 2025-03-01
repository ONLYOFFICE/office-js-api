# BETAINV

Returns the inverse of the cumulative beta probability density function for a specified beta distribution (BETADIST).

## Syntax

```javascript
expression.BETAINV(arg1, arg2, arg3, arg4, arg5);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A probability associated with the beta distribution. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The alpha parameter of the distribution which must be greater than 0. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The beta parameter of the distribution which must be greater than 0. |
| arg4 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | An optional lower bound to the interval of x (A). If omitted, it is equal to 0. |
| arg5 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | An optional upper bound to the interval of x (B). If omitted, it is equal to 1. |

## Returns

number

## Example

This example shows how to return the inverse of the cumulative beta probability density function (BETA_DIST).

```javascript editor-xlsx
// How to get a result from the inverse of the cumulative beta probability density function.

// Use function to get the inverse of the cumulative beta probability distribution function.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.BETAINV(0.2, 4, 5));
```
