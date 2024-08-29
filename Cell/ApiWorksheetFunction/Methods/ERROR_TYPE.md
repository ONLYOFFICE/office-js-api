# ERROR_TYPE

Returns a number matching an error value..

## Syntax

expression.ERROR_TYPE(arg1);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is the error value for which you want the identifying number, and can be an actual error value or a reference to a cell containing an error value. |

## Returns

number, string, boolean

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var nonPositiveNum = 0;
var logResult = oFunction.LOG(nonPositiveNum);
oWorksheet.GetRange("B3").SetValue(logResult);
oWorksheet.GetRange("C3").SetValue(oFunction.ERROR_TYPE(logResult));

```
