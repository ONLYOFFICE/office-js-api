# WEEKDAY

Returns a number from 1 to 7 identifying the day of the week of the specified date.

## Syntax

```javascript
expression.WEEKDAY(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A number that represents a date, or a result of other formulas or functions. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A number that determines the type of return value: **1** - returns a number from 1 (Sunday) to 7 (Saturday); **2** - returns a number from 1 (Monday) to 7 (Sunday); **3** - returns a number from 0 (Monday) to 6 (Sunday). |

## Returns

number

## Example

This example shows how to return a number from 1 to 7 identifying the day of the week of the specified date.

```javascript editor-xlsx
// How to return a weekday.

// Use a function to get a weekday using numbers.

const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.WEEKDAY("11/5/2018", 2); 

oWorksheet.GetRange("C1").SetValue(ans);

```
