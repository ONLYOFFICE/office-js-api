# EOMONTH

Returns the serial number of the last day of the month before or after the specified number of months.

## Syntax

```javascript
expression.EOMONTH(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A serial date number that represents the start date. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of months before or after the start date. |

## Returns

number

## Example

This example shows how to return the serial number of the last day of the month before or after the specified number of months.

```javascript editor-xlsx
// How to get a date of the last day of the month before or after specified months.

// Use function to get the serial number of the last day of the month before or after the specified number of months.

const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.EOMONTH("3/16/2018", 10); 

oWorksheet.GetRange("C1").SetValue(ans);

```
