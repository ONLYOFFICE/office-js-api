# TBILLYIELD

Returns the yield for a Treasury bill.

## Syntax

```javascript
expression.TBILLYIELD(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The settlement date of the Treasury bill, expressed as a serial date number. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The maturity date of the Treasury bill, expressed as a serial date number. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The purchase price of the Treasury bill, per $100 par value. |

## Returns

number

## Example

This example shows how to return the yield for a Treasury bill.

```javascript editor-xlsx
// How to return the yield for a Treasury bill.

// Use a function to calculate a Treasury bill yield.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.TBILLYIELD("2/15/2018", "6/1/2018", 99.5));
```
