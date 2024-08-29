# YIELD

Returns the yield on a security that pays periodic interest.

## Syntax

expression.YIELD(arg1, arg2, arg3, arg4, arg5, arg6, arg7);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is the security's settlement date, expressed as a serial date number. |
| arg2 | Required | any |  | Is the security's maturity date, expressed as a serial date number. |
| arg3 | Required | any |  | Is the security's annual coupon rate. |
| arg4 | Required | any |  | Is the security's price per $100 face value. |
| arg5 | Required | any |  | Is the security's redemption value per $100 face value. |
| arg6 | Required | any |  | Is the number of coupon payments per year. |
| arg7 | Required | any |  | Is the type of day count basis to use. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.YIELD("1/10/2018", "11/20/2019", "3.75%", 90, 100, 4));
```
