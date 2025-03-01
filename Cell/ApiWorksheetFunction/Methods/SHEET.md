# SHEET

Returns the sheet number of the reference sheet.

## Syntax

```javascript
expression.SHEET(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | string \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | The name of a sheet or a reference for which the sheet number will be returned. If omitted the number of the sheet containing the function is returned. |

## Returns

number

## Example

This example shows how to return the sheet number of the reference sheet.

```javascript editor-xlsx
// How to get a sheet number.

// Use a function to get a sheet index.

const oWorksheet = Api.GetActiveSheet(); 
var oFunction = Api.GetWorksheetFunction();
var result = oFunction.SHEET("Sheet1");
oWorksheet.GetRange("C3").SetValue(result);

```
