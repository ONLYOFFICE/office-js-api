# WORKDAY

Returns the serial number of the date before or after a specified number of workdays.

## Syntax

expression.WORKDAY(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is a serial date number that represents the start date. |
| arg2 | Required | any |  | Is the number of nonweekend and non-holiday days before or after start_date. |
| arg3 | Required | any |  | Is an optional array of one or more serial date numbers to exclude from the working calendar, such as state and federal holidays and floating holidays. |

## Returns

number, string, boolean

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.WORKDAY("12/7/1981", 56); 

oWorksheet.GetRange("C1").SetValue(ans);

```
