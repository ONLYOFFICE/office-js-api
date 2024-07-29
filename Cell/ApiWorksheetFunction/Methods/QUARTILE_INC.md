# QUARTILE_INC

Returns the quartile of a data set, based on percentile values from 0..1, inclusive.

## Syntax

expression.QUARTILE_INC(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | Array.<number> &#124;[ApiRange](../../ApiRange/ApiRange.md) |  | The array or cell range of numeric values for which the quartile value will be returned. |
| arg2 | Required | number |  | The quartile value to return: minimum value = 0; 1st quartile = 1; median value = 2; 3rd quartile = 3; maximum value = 4. |

## Returns

number