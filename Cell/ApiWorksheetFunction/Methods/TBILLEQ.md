# TBILLEQ

Returns the bond-equivalent yield for a treasury bill.

## Syntax

expression.TBILLEQ(arg1, arg2, arg3);

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
oWorksheet.GetRange("A1").SetValue(oFunction.TBILLEQ("1/1/2018", "11/20/2018", "8.00%"));
```
