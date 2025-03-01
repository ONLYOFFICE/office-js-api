# PPMT

Returns the payment on the principal for a given investment based on periodic, constant payments and a constant interest rate.

## Syntax

```javascript
expression.PPMT(arg1, arg2, arg3, arg4, arg5, arg6);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The period for which the principal payment will be returned. It must be in the range from 1 to to the total number of payment periods. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The total number of payment periods in an investment. |
| arg4 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The present value: the total amount that a series of future payments is worth now. |
| arg5 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The future value, or cash balance which will be attained after the last payment is made. |
| arg6 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A logical value: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted. |

## Returns

number

## Example

This example shows how to return the payment on the principal for a given investment based on periodic, constant payments and a constant interest rate.

```javascript editor-xlsx
// How to return the payment on the principal for a given investment.

// Use a function to calculate the payment on the principal for a given investment based on parameters.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.PPMT(0.1/12, 1, 2*12, 2000, 0));
```
