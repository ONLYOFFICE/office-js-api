# YEAR

Returns the year of a date, an integer in the range 1900-9999.

## Syntax

```javascript
expression.YEAR(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A number in the date-time code, or a result of other formulas or functions. |

## Returns

number

## Example

This example shows how to return the year of a date, an integer in the range 1900-9999.

```javascript editor-xlsx
// How to return the year of a date.

// Use a function to get a year from a date object.

const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.YEAR("3/16/2018");

oWorksheet.GetRange("C1").SetValue(ans);

```
