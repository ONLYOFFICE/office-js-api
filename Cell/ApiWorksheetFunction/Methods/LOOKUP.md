# LOOKUP

Looks up a value either from a one-row or one-column range or from an array. Provided for backwards compatibility.

## Syntax

expression.LOOKUP(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is a value that LOOKUP searches for in Lookup_vector and can be a number, text, a logical value, or a name or reference to a value. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | Is a range that contains only one row or one column of text, numbers, or logical values, placed in ascending order. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | Is a range that contains only one row or column, the same size as Lookup_vector. |

## Returns

number, string, boolean