# ODDFPRICE

Returns the price per $100 face value of a security with an odd first period.

## Syntax

expression.ODDFPRICE(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is the security's settlement date, expressed as a serial date number. |
| arg2 | Required | any |  | Is the security's maturity date, expressed as a serial date number. |
| arg3 | Required | any |  | Is the security's issue date, expressed as a serial date number. |
| arg4 | Required | any |  | Is the security's first coupon date, expressed as a serial date number. |
| arg5 | Required | any |  | Is the security's interest rate. |
| arg6 | Required | any |  | Is the security's annual yield. |
| arg7 | Required | any |  | Is the security's redemption value per $100 face value. |
| arg8 | Required | any |  | Is the number of coupon payments per year. |
| arg9 | Required | any |  | Is the type of day count basis to use. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ODDFPRICE("1/1/2017", "6/1/2019", "12/1/2016", "3/15/2017", 0.05, 0.09, 100, 2));
```
