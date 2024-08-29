# SHEET

Returns the sheet number of the referenced sheet.

## Syntax

expression.SHEET(arg1);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | string |  | Is the name of a sheet or a reference that you want the sheet number of.  If omitted the number of the sheet containing the function is returned. |

## Returns

number, string, boolean

## Example



```javascript
const oWorksheet = Api.GetActiveSheet(); 
var oFunction = Api.GetWorksheetFunction();
var result = oFunction.SHEET("Sheet1");
oWorksheet.GetRange("C3").SetValue(result);

```
