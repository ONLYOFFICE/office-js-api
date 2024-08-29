# YIELDDISC

Returns the annual yield for a discounted security. For example, a treasury bill.

## Syntax

expression.YIELDDISC(arg1, arg2, arg3, arg4, arg5);

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

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.YIELDDISC("1/10/2018", "11/20/2019", 90, 100));
```
