# FVSCHEDULE

Returns the future value of an initial principal after applying a series of compound interest rates.

## Syntax

```javascript
expression.FVSCHEDULE(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The present value of an investment. |
| arg2 | Required | number[] \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | An array of interest rates to apply. |

## Returns

number

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue("Principal");
worksheet.GetRange("B1").SetValue(100);
worksheet.GetRange("A2").SetValue("Rate 1");
worksheet.GetRange("B2").SetValue(0.03);
worksheet.GetRange("A3").SetValue("Rate 2");
worksheet.GetRange("B3").SetValue(0.05);
worksheet.GetRange("A4").SetValue("Rate 3");
worksheet.GetRange("B4").SetValue(0.1);
let range = worksheet.GetRange("B2:B4");
worksheet.GetRange("B5").SetValue(func.FVSCHEDULE(100, range));
```
