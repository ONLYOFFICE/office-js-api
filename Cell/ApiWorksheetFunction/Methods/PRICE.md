# PRICE

Returns the price per $100 face value of a security that pays periodic interest.

## Syntax

expression.PRICE(arg1, arg2, arg3, arg4, arg5, arg6, arg7);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is the security's settlement date, expressed as a serial date number. |
| arg2 | Required | any |  | Is the security's maturity date, expressed as a serial date number. |
| arg3 | Required | any |  | Is the security's annual coupon rate. |
| arg4 | Required | any |  | Is the security's annual yield. |
| arg5 | Required | any |  | Is the security's redemption value per $100 face value. |
| arg6 | Required | any |  | Is the number of coupon payments per year. |
| arg7 | Required | any |  | Is the type of day count basis to use. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.PRICE("1/1/2017", "6/1/2019", 0.05, 0.09, 105, 2));
```
