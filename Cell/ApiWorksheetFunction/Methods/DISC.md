# DISC

Returns the discount rate for a security.

## Syntax

expression.DISC(arg1, arg2, arg3, arg4, arg5);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is the security's settlement date, expressed as a serial date number. |
| arg2 | Required | any |  | Is the security's maturity date, expressed as a serial date number. |
| arg3 | Required | any |  | Is the security's price per $100 face value. |
| arg4 | Required | any |  | Is the security's redemption value per $100 face value. |
| arg5 | Required | any |  | Is the type of day count basis to use. |

## Returns

number, string, boolean