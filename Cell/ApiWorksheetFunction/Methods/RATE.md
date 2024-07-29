# RATE

Returns the interest rate per period of a loan or an investment. For example, use 6%/4 for quarterly payments at 6% APR.

## Syntax

expression.RATE(arg1, arg2, arg3, arg4, arg5, arg6);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | Is the total number of payment periods for the loan or investment. |
| arg2 | Required | number |  | Is the payment made each period and cannot change over the life of the loan or investment. |
| arg3 | Required | number |  | Is the present value: the total amount that a series of future payments is worth now. |
| arg4 | Required | number |  | Is the future value, or a cash balance you want to attain after the last payment is made. If omitted, uses Fv = 0. |
| arg5 | Required | number |  | Is a logical value: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted. |
| arg6 | Required | number |  | Is your guess for what the rate will be; if omitted, Guess = 0.1 (10 percent). |

## Returns

number, string, boolean