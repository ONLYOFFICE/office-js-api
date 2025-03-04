# MONTH

Returns the month, a number from 1 (January) to 12 (December).

## Syntax

```javascript
expression.MONTH(arg1-);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1- | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A number in the date-time code. |

## Returns

number

## Example

This example shows how to return the month, a number from 1 (January) to 12 (December).

```javascript editor-xlsx
// How to get the month from a date.

// Use a function to get a month.

const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.MONTH("3/16/2018"); 

oWorksheet.GetRange("C1").SetValue(ans);

```
