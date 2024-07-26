# PV

Returns the present value of an investment: the total amount that a series of future payments is worth now.

## Syntax

expression.PV(arg1, arg2, arg3, arg4, arg5);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | Is the interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR. |
| arg2 | Required | number |  | Is the total number of payment periods in an investment. |
| arg3 | Required | number |  | Is the payment made each period and cannot change over the life of the investment. |
| arg4 | Required | number |  | Is the future value, or a cash balance you want to attain after the last payment is made. |
| arg5 | Required | number |  | Is a logical value: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted. |

## Returns

number, string, boolean