# XIRR

Returns the internal rate of return for a schedule of cash flows.

## Syntax

expression.XIRR(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is a series of cash flows that correspond to a schedule of payments in dates. |
| arg2 | Required | any |  | Is a schedule of payment dates that corresponds to the cash flow payments. |
| arg3 | Required | any |  | Is a number that you guess is close to the result of XIRR. |

## Returns

number, string, boolean