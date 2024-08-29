# YEARFRAC

Returns the year fraction representing the number of whole days between start_date and end_date.

## Syntax

expression.YEARFRAC(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is a serial date number that represents the start date. |
| arg2 | Required | any |  | Is a serial date number that represents the end date. |
| arg3 | Required | any |  | Is the type of day count basis to use. |

## Returns

number, string, boolean

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.YEARFRAC("12/7/1981", "11/5/2018");

oWorksheet.GetRange("C1").SetValue(ans);

```
