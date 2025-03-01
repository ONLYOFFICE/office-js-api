# DAY

Returns the day of the date given in the numerical format, a number from 1 to 31.

## Syntax

```javascript
expression.DAY(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A number in the date-time code. |

## Returns

number

## Example

This example shows how to return the day of the date given in the numerical format, a number from 1 to 31.

```javascript editor-xlsx
// How to get a day from a date.

// Use function to get day from provided date.

const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.DAY("2018/3/16"); 

oWorksheet.GetRange("C1").SetValue(ans);

```
