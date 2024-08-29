# YIELDMAT

Returns the annual yield of a security that pays interest at maturity.

## Syntax

expression.YIELDMAT(arg1, arg2, arg3, arg4, arg5, arg6);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is the security's settlement date, expressed as a serial date number. |
| arg2 | Required | any |  | Is the security's maturity date, expressed as a serial date number. |
| arg3 | Required | any |  | Is the security's issue date, expressed as a serial date number. |
| arg4 | Required | any |  | Is the security's interest rate at date of issue. |
| arg5 | Required | any |  | Is the security's price per $100 face value. |
| arg6 | Required | any |  | Is the type of day count basis to use. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.YIELDMAT("1/10/2018", "11/20/2019", "1/1/2017", "6.00%", 90));
```
