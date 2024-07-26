# PERCENTILE_EXC

Returns the k-th percentile of values in a range, where k is in the range 0..1, exclusive.

## Syntax

expression.PERCENTILE_EXC(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | Array.<number> &#124;[ApiRange](../../ApiRange/ApiRange.md) |  | The array or range of data that defines relative standing. |
| arg2 | Required | number |  | The percentile value that is greater than 0 but less than 1. |

## Returns

number