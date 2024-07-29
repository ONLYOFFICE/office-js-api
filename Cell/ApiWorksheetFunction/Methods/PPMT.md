# PPMT

Returns the payment on the principal for a given investment based on periodic, constant payments and a constant interest rate.

## Syntax

expression.PPMT(arg1, arg2, arg3, arg4, arg5, arg6);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | Is the interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR. |
| arg2 | Required | number |  | Specifies the period and must be in the range 1 to nper. |
| arg3 | Required | number |  | Is the total number of payment periods in an investment. |
| arg4 | Required | number |  | Is the present value: the total amount that a series of future payments is worth now. |
| arg5 | Required | number |  | Is the future value, or cash balance you want to attain after the last payment is made. |
| arg6 | Required | number |  | Is a logical value: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted. |

## Returns

number, string, boolean