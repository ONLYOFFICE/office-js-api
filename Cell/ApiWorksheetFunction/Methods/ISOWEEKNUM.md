# ISOWEEKNUM

Returns the ISO week number in the year for a given date.

## Syntax

expression.ISOWEEKNUM(arg1);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | Is the date-time code used by Microsoft Excel for date and time calculation. |

## Returns

number, string, boolean

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.ISOWEEKNUM("9/1/2017"); 

oWorksheet.GetRange("C1").SetValue(ans);

```
