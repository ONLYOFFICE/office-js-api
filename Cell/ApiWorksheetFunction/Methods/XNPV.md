# XNPV

Returns the net present value for a schedule of cash flows.

## Syntax

expression.XNPV(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is the discount rate to apply to the cash flows. |
| arg2 | Required | any |  | Is a series of cash flows that correspond to a schedule of payments in dates. |
| arg3 | Required | any |  | Is a schedule of payment dates that corresponds to the cash flow payments. |

## Returns

number, string, boolean