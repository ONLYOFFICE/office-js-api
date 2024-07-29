# COUNTIF

Counts a number of cells within a range that meet the given condition.

## Syntax

expression.COUNTIF(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | The range of cells to count nonblank cells. |
| arg2 | Required | number &#124;string |  | The condition in the form of a number, expression, or text that defines which cells will be counted. |

## Returns

number