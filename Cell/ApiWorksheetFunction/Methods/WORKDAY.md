# WORKDAY

Returns the serial number of the date before or after a specified number of workdays.

## Syntax

```javascript
expression.WORKDAY(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A serial date number that represents the start date. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of nonweekend and non-holiday days before or after the start date. A positive value for days yields a future date; a negative value yields a past date. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | An optional range or array of one or more serial date numbers to exclude from the working calendar, such as state and federal holidays and floating holidays. |

## Returns

number

## Example

This example shows how to return the serial number of the date before or after a specified number of workdays.

```javascript editor-xlsx
// How to return the serial number of the date adding some workdays.

// Use a function to calculate the serial number of the date.

const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.WORKDAY("12/7/1981", 56); 

oWorksheet.GetRange("C1").SetValue(ans);

```
