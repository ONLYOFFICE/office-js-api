# AVERAGE

Returns the average (arithmetic mean) of the specified arguments.

## Syntax

```javascript
expression.AVERAGE(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| number[] |  | Up to 255 numeric values for which the average value will be returned. The first argument is required, subsequent arguments are optional. Arguments can be numbers, names, or arrays of numbers. |

## Returns

number

## Example

This example shows how to return the average of the absolute deviations of data points from their mean.

```javascript editor-xlsx
// How to get an average of the absolute deviations.

// Use function to get the average of the absolute deviations of data points from their mean.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.AVERAGE(123, 197, 46, 345, 67, 456);
oWorksheet.GetRange("B2").SetValue(ans);
```
