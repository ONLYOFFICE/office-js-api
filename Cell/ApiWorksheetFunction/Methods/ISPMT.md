# ISPMT

Returns the interest paid during a specific period of an investment.

## Syntax

expression.ISPMT(arg1, arg2, arg3, arg4);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | Interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR. |
| arg2 | Required | number |  | Period for which you want to find the interest. |
| arg3 | Required | number |  | Number of payment periods in an investment. |
| arg4 | Required | number |  | Lump sum amount that a series of future payments is right now. |

## Returns

number, string, boolean