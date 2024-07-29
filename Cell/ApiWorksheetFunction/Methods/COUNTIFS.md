# COUNTIFS

Counts a number of cells specified by a given set of conditions or criteria.

## Syntax

expression.COUNTIFS(arg1, arg2, arg3, arg4);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | The first range of cells to count nonblank cells. |
| arg2 | Required | number &#124;string |  | The first condition in the form of a number, expression, or text that defines which cells will be counted. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | Up to 127 additional ranges of cells to count nonblank cells. This argument is optional. |
| arg4 | Required | number &#124;string |  | Up to 127 additional conditions in the form of a number, expression, or text that define which cells will be counted. |

## Returns

number