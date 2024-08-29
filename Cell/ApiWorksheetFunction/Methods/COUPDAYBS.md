# COUPDAYBS

Returns the number of days from the beginning of the coupon period to the settlement date.

## Syntax

expression.COUPDAYBS(arg1, arg2, arg3, arg4);

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

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.COUPDAYBS("1/10/2018", "6/15/2019", 4, 1));
```
