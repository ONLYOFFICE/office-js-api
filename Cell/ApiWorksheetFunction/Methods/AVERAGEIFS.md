# AVERAGEIFS

Finds the average (arithmetic mean) for the cells specified by a given set of conditions or criteria.

## Syntax

expression.AVERAGEIFS(arg1, arg2, arg3, arg4, arg5);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | The range of cells which will be evaluated. |
| arg2 | Required | number &#124;string |  | The first condition or criteria in the form of a number, expression, or text that defines which cells will be used to find the average. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | The actual cells to be used to find the average. If omitted, the cells in the range are used. |
| arg4 | Required | number &#124;string |  | Up to 127 additional conditions or criteria in the form of a number, expression, or text that defines which cells will be used to find the average. These arguments are optional. |
| arg5 | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | Up to 127 actual ranges to be used to find the average. If omitted, the cells in the range are used. These arguments are optional. |

## Returns

number