# DATE

Returns a number that represents the date in the date-time code.

## Syntax

```javascript
expression.DATE(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | A number from 1900 or 1904 (depending on the workbook's date system) to 9999. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | A number from 1 to 12 representing the month of the year. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | A number from 1 to 31 representing the day of the month. |

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.DATE(2018, 3, 16));
```
