# IPMT

Returns the interest payment for a given period for an investment, based on periodic, constant payments and a constant interest rate.

## Syntax

```javascript
expression.IPMT(arg1, arg2, arg3, arg4, arg5, arg6);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The period for which the interest will be returned. It must be in the range from 1 to the total number of payments. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The total number of payment periods in an investment. |
| arg4 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The present value, or the lump-sum amount that a series of future payments is worth now. |
| arg5 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The future value, or a cash balance which will be attained after the last payment is made. If omitted, it is equal to 0. |
| arg6 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | A logical value representing the timing of payment: at the end of the period = 0 or omitted, at the beginning of the period = 1. |

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IPMT(0.1/12, 1, 2*12, 2000, 0));
```
