# DAYS

Returns the number of days between the two dates.

## Syntax

```javascript
expression.DAYS(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | Start date from which days will be counted. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | End date until which days will be counted. |

## Returns

number

## Example

This example shows how to return the number of days between the two dates.

```javascript editor-xlsx
// How to get difference between two dates in days.

// Use function to get days count between two dates.

const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.DAYS("3/31/2018", "3/16/2018"); 

oWorksheet.GetRange("C1").SetValue(ans);

```
