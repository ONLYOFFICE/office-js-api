# ACCRINT

Returns the accrued interest for a security that pays periodic interest..

## Syntax

expression.ACCRINT(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is the security's issue date, expressed as a serial date number. |
| arg2 | Required | any |  | Is the security's first interest date, expressed as a serial date number. |
| arg3 | Required | any |  | Is the security's settlement date, expressed as a serial date number. |
| arg4 | Required | any |  | Is the security's annual coupon rate. |
| arg5 | Required | any |  | Is the security's par value. |
| arg6 | Required | any |  | Is the number of coupon payments per year. |
| arg7 | Required | any |  | Is the type of day count basis to use. |
| arg8 | Required | any |  | Is a logical value: to accrued interest from issue date = TRUE or omitted; to calculate from last coupon payment date = FALSE. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ACCRINT("1/1/2018", "6/25/2018", "10/15/2018", "3.50%", 1000, 2));
```
