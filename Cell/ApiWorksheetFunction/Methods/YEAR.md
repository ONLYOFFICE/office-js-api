# YEAR

Returns the year of a date, an integer in the range 1900-9999..

## Syntax

expression.YEAR(arg1);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | Is a number in the date-time code used by Microsoft Excel. |

## Returns

number, string, boolean

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.YEAR("3/16/2018");

oWorksheet.GetRange("C1").SetValue(ans);

```
