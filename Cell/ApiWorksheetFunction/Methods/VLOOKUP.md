# VLOOKUP

Looks for a value in the leftmost column of a table and then returns a value in the same row from a column that you specify. By default, the table must be sorted in an ascending order.

## Syntax

expression.VLOOKUP(arg1, arg2, arg3, arg4);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is the value to be found in the first column of the table, and can be a value, a reference, or a text string. |
| arg2 | Required | number |  | Is a table of text, numbers, or logical values, in which data is retrieved. Table_array can be a reference to a range or a range name. |
| arg3 | Required | number |  | Is the column number in table_array from which the matching value should be returned. The first column of values in the table is column 1. |
| arg4 | Required | boolean |  | Is a logical value: to find the closest match in the first column (sorted in ascending order) = TRUE or omitted; find an exact match = FALSE. |

## Returns

number, string, boolean