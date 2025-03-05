# DATEVALUE

Converts a date in the form of text to a number that represents the date in the date-time code.

## Syntax

```javascript
expression.DATEVALUE(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text that represents a date, between 1/1/1900 or 1/1/1904 (depending on the workbook's date system) and 12/31/9999. |

## Returns

number

## Example



```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let ans = func.DATEVALUE("2018-3-16"); 

worksheet.GetRange("C1").SetValue(ans);

```
