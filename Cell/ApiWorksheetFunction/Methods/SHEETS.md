# SHEETS

Returns the number of sheets in a reference.

## Syntax

```javascript
expression.SHEETS(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | A reference for which the number of sheets will be returned. If omitted the number of sheets in the workbook containing the function is returned. |

## Returns

number

## Example

This example shows how to return the number of sheets in a reference.

```javascript editor-xlsx
// How to count sheets.

// Use a function to get how many sheets are present in the worksheet.

// Add more sheets

Api.AddSheet("Sheet2")
Api.AddSheet("Sheet3")

// Get the number of sheets

var oFunction = Api.GetWorksheetFunction();
var result = oFunction.SHEETS();
const oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("C3").SetValue(result);

```
