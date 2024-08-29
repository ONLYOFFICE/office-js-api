# NETWORKDAYS

Returns the number of whole workdays between two dates.

## Syntax

expression.NETWORKDAYS(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is a serial date number that represents the start date. |
| arg2 | Required | any |  | Is a serial date number that represents the end date. |
| arg3 | Required | any |  | Is an optional set of one or more serial date numbers to exclude from the working calendar, such as state and federal holidays and floating holidays. |

## Returns

number, string, boolean

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.NETWORKDAYS("3/16/2018", "12/31/2018"); 

oWorksheet.GetRange("C1").SetValue(ans);

```
