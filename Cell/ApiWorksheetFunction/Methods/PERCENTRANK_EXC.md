# PERCENTRANK_EXC

Returns the rank of a value in a data set as a percentage (0..1, exclusive) of the data set.

## Syntax

expression.PERCENTRANK_EXC(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | Array.<number> &#124;[ApiRange](../../ApiRange/ApiRange.md) |  | The array or range of data with numeric values that defines relative standing. |
| arg2 | Required | number |  | The value for which the rank will be returned. |
| arg3 | Required | number |  | An optional value that identifies the number of significant digits for the returned percentage, three digits if omitted (0.xxx%). |

## Returns

number