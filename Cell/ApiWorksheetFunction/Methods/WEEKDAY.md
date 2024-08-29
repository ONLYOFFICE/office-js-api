# WEEKDAY

Returns a number from 1 to 7 identifying the day of the week of a date..

## Syntax

expression.WEEKDAY(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | Is a number that represents a date. |
| arg2 | Required | number |  | Is a number: for Sunday=1 through Saturday=7, use 1; for Monday=1 through Sunday=7, use 2; for Monday=0 through Sunday=6, use 3. |

## Returns

number, string, boolean

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.WEEKDAY("11/5/2018", 2); 

oWorksheet.GetRange("C1").SetValue(ans);

```
