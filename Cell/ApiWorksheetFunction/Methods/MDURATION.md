# MDURATION

Returns the Macauley modified duration for a security with an assumed par value of $100.

## Syntax

expression.MDURATION(arg1, arg2, arg3, arg4, arg5, arg6);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is the security's settlement date, expressed as a serial date number. |
| arg2 | Required | any |  | Is the security's maturity date, expressed as a serial date number. |
| arg3 | Required | any |  | Is the security's annual coupon rate. |
| arg4 | Required | any |  | Is the security's annual yield. |
| arg5 | Required | any |  | Is the number of coupon payments per year. |
| arg6 | Required | any |  | Is the type of day count basis to use. |

## Returns

number, string, boolean