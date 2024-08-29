# TIME

Converts hours, minutes and seconds given as numbers to a serial number, formatted with a time format.

## Syntax

expression.TIME(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | Is a number from 0 to 23 representing the hour. |
| arg2 | Required | number |  | Is a number from 0 to 59 representing the minute. |
| arg3 | Required | number |  | Is a number from 0 to 59 representing the second. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.TIME(23, 4, 39));
```
