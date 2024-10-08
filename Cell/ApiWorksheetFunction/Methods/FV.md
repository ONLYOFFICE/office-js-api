# FV

Returns the future value of an investment based on periodic, constant payments and a constant interest rate.

## Syntax

expression.FV(arg1, arg2, arg3, arg4, arg5);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | Is the interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR. |
| arg2 | Required | number |  | Is the total number of payment periods in the investment. |
| arg3 | Required | number |  | Is the payment made each period; it cannot change over the life of the investment. |
| arg4 | Required | number |  | Is the present value, or the lump-sum amount that a series of future payments is worth now. If omitted, Pv = 0. |
| arg5 | Required | number |  | Is a value representing the timing of payment: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.FV(0.1/12, 2*12, -500, 10000));
```
