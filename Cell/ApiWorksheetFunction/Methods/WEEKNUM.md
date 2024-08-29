# WEEKNUM

Returns the week number in the year.

## Syntax

expression.WEEKNUM(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is the date-time code used by Microsoft Excel for date and time calculation. |
| arg2 | Required | any |  | Is a number (1 or 2) that determines the type of the return value. |

## Returns

number, string, boolean

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.WEEKNUM("11/5/2018", 2); 

oWorksheet.GetRange("C1").SetValue(ans);

```
