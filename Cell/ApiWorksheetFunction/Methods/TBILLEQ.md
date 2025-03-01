# TBILLEQ

Returns the bond-equivalent yield for a treasury bill.

## Syntax

```javascript
expression.TBILLEQ(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The settlement date of the Treasury bill, expressed as a serial date number. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The maturity date of the Treasury bill, expressed as a serial date number. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The discount rate of the Treasury bill. |

## Returns

number

## Example

This example shows how to return the bond-equivalent yield for a treasury bill.

```javascript editor-xlsx
// How to return the bond-equivalent yield for a treasury bill.

// Use a function to calculate the bond-equivalent yield.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.TBILLEQ("1/1/2018", "11/20/2018", "8.00%"));
```
