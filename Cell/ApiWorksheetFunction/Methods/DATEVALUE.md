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

This example shows how to convert a date in the form of text to a number that represents the date in the date-time code.

```javascript editor-xlsx
// How to convert a date from the form of text.

// Use function to get the date from a text.

const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.DATEVALUE("2018-3-16"); 

oWorksheet.GetRange("C1").SetValue(ans);

```
