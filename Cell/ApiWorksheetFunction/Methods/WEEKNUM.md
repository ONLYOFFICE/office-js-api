# WEEKNUM

Returns the week number in the year.

## Syntax

```javascript
expression.WEEKNUM(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The date-time code used for date and time calculation. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A number (1 or 2) that determines the type of the return value: Sunday (1) or Monday (2). |

## Returns

number

## Example

This example shows how to return a number from 1 to 7 identifying the day of the week of the specified date.

```javascript editor-xlsx
// How to return a weekday.

// Use a function to get a weekday using numbers.

const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.WEEKNUM("11/5/2018", 2); 

oWorksheet.GetRange("C1").SetValue(ans);

```
