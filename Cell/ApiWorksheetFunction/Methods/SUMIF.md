# SUMIF

Adds the cells specified by a given condition or criteria.

## Syntax

expression.SUMIF(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | Is the range of cells you want evaluated. |
| arg2 | Required | any |  | Is the condition or criteria in the form of a number, expression, or text that defines which cells will be added. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | Are the actual cells to sum. If omitted, the cells in range are used. |

## Returns

number, string, boolean