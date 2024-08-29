# TBILLPRICE

Returns the price per $100 face value for a treasury bill.

## Syntax

expression.TBILLPRICE(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is the Treasury bill's settlement date, expressed as a serial date number. |
| arg2 | Required | any |  | Is the Treasury bill's maturity date, expressed as a serial date number. |
| arg3 | Required | any |  | Is the Treasury bill's discount rate. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.TBILLPRICE("1/1/2018", "1/1/2019", "3.00%"));
```
