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
| arg1 | Required | string | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) |  | The name of a sheet or a reference for which the sheet number will be returned. If omitted the number of the sheet containing the function is returned. |

## Returns

number

## Example



```javascript
const oWorksheet = Api.GetActiveSheet(); 
var oFunction = Api.GetWorksheetFunction();
var result = oFunction.SHEET("Sheet1");
oWorksheet.GetRange("C3").SetValue(result);

```
