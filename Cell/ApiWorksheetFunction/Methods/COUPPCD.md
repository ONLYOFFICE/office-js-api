# COUPPCD

Returns the previous coupon date before the settlement date.

## Syntax

expression.COUPPCD(arg1, arg2, arg3, arg4);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is the security's settlement date, expressed as a serial date number. |
| arg2 | Required | any |  | Is the security's maturity date, expressed as a serial date number. |
| arg3 | Required | any |  | Is the number of coupon payments per year. |
| arg4 | Required | any |  | Is the type of day count basis to use. |

## Returns

number, string, boolean