# PMT

Calculates the payment for a loan based on constant payments and a constant interest rate.

## Syntax

```javascript
expression.PMT(arg1, arg2, arg3, arg4, arg5);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The interest rate per period for the loan. For example, use 6%/4 for quarterly payments at 6% APR. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The total number of payments for the loan. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The present value: the total amount that a series of future payments is worth now. |
| arg4 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The future value, or a cash balance which will be attained after the last payment is made. If omitted, it is equal to 0. |
| arg5 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | A logical value: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted. |

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.PMT(0.08/12, 2*12, 10000, 0));
```
