# AVERAGEIF

Finds the average (arithmetic mean) for the cells specified by a given condition or criteria.

## Syntax

expression.AVERAGEIF(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | The range of cells which will be evaluated. |
| arg2 | Required | number &#124;string |  | The condition or criteria in the form of a number, expression, or text that defines which cells will be used to find the average. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | The actual cells to be used to find the average. If omitted, the cells in the range are used. |

## Returns

number