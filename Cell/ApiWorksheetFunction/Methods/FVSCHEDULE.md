# FVSCHEDULE

Returns the future value of an initial principal after applying a series of compound interest rates.

## Syntax

expression.FVSCHEDULE(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The present value of an investment. |
| arg2 | Required | number[] | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) |  | An array of interest rates to apply. |

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue("Principal");
oWorksheet.GetRange("B1").SetValue(100);
oWorksheet.GetRange("A2").SetValue("Rate 1");
oWorksheet.GetRange("B2").SetValue(0.03);
oWorksheet.GetRange("A3").SetValue("Rate 2");
oWorksheet.GetRange("B3").SetValue(0.05);
oWorksheet.GetRange("A4").SetValue("Rate 3");
oWorksheet.GetRange("B4").SetValue(0.1);
var oRange = oWorksheet.GetRange("B2:B4");
oWorksheet.GetRange("B5").SetValue(oFunction.FVSCHEDULE(100, oRange));
```
