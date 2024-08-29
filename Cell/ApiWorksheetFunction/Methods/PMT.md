# PMT

Calculates the payment for a loan based on constant payments and a constant interest rate.

## Syntax

expression.PMT(arg1, arg2, arg3, arg4, arg5);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | Is the interest rate per period for the loan. For example, use 6%/4 for quarterly payments at 6% APR. |
| arg2 | Required | number |  | Is the total number of payments for the loan. |
| arg3 | Required | number |  | Is the present value: the total amount that a series of future payments is worth now. |
| arg4 | Required | number |  | Is the future value, or a cash balance you want to attain after the last payment is made, 0 (zero) if omitted. |
| arg5 | Required | number |  | Is a logical value: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.PMT(0.08/12, 2*12, 10000, 0));
```
