# IPMT

Returns the interest payment for a given period for an investment, based on periodic, constant payments and a constant interest rate.

## Syntax

expression.IPMT(arg1, arg2, arg3, arg4, arg5, arg6);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | Is the interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR. |
| arg2 | Required | number |  | Is the period for which you want to find the interest and must be in the range 1 to Nper. |
| arg3 | Required | number |  | Is the total number of payment periods in an investment. |
| arg4 | Required | number |  | Is the present value, or the lump-sum amount that a series of future payments is worth now. |
| arg5 | Required | number |  | Is the future value, or a cash balance you want to attain after the last payment is made. If omitted, Fv = 0. |
| arg6 | Required | number |  | Is a logical value representing the timing of payment: at the end of the period = 0 or omitted, at the beginning of the period = 1. |

## Returns

number, string, boolean