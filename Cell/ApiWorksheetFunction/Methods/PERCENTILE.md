# PERCENTILE

Returns the k-th percentile of values in a range.

## Syntax

expression.PERCENTILE(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | Array.<number> &#124;[ApiRange](../../ApiRange/ApiRange.md) |  | The array or range of data that defines relative standing. |
| arg2 | Required | number |  | The percentile value that is equal to 0 but less than or equal to 1. |

## Returns

number