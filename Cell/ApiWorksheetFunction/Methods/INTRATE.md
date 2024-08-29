# INTRATE

Returns the interest rate for a fully invested security.

## Syntax

expression.INTRATE(arg1, arg2, arg3, arg4, arg5);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is the security's settlement date, expressed as a serial date number. |
| arg2 | Required | any |  | Is the security's maturity date, expressed as a serial date number. |
| arg3 | Required | any |  | Is the amount invested in the security. |
| arg4 | Required | any |  | Is the amount to be received at maturity. |
| arg5 | Required | any |  | Is the type of day count basis to use. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.INTRATE("1/1/2018", "11/12/2018", 1000, 1050, 2));
```
