# TRIMMEAN

Returns the mean of the interior portion of a set of data values.

## Syntax

expression.TRIMMEAN(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) &#124;Array.<number> |  | The range or array of values to trim and average. |
| arg2 | Required | number |  | The fractional number of data points to exclude from the top and bottom of the data set. |

## Returns

number