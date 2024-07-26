# QUARTILE_EXC

Returns the quartile of a data set, based on percentile values from 0..1, exclusive.

## Syntax

expression.QUARTILE_EXC(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | Array.<number> &#124;[ApiRange](../../ApiRange/ApiRange.md) |  | The array or cell range of numeric values for which the quartile value will be returned. |
| arg2 | Required | number |  | The quartile value to return: 1st quartile = 1; median value = 2; 3rd quartile = 3. |

## Returns

number