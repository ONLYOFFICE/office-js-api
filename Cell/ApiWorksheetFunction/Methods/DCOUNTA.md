# DCOUNTA

Counts nonblank cells in the field (column) of records in the database that match the conditions you specify.

## Syntax

expression.DCOUNTA(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | Is the range of cells that makes up the list or database. A database is a list of related data. |
| arg2 | Required | number |  | Is either the label of the column in double quotation marks or a number that represents the column's position in the list. |
| arg3 | Required | string |  | Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition. |

## Returns

number, string, boolean