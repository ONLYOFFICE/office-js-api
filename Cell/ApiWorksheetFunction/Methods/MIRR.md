# MIRR

Returns the internal rate of return for a series of periodic cash flows, considering both cost of investment and interest on reinvestment of cash.

## Syntax

expression.MIRR(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | Is an array or a reference to cells that contain numbers that represent a series of payments (negative) and income (positive) at regular periods. |
| arg2 | Required | number |  | Is the interest rate you pay on the money used in the cash flows. |
| arg3 | Required | number |  | Is the interest rate you receive on the cash flows as you reinvest them. |

## Returns

number, string, boolean