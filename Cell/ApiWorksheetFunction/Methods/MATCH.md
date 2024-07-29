# MATCH

Returns the relative position of an item in an array that matches a specified value in a specified order.

## Syntax

expression.MATCH(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is the value you use to find the value you want in the array, a number, text, or logical value, or a reference to one of these. |
| arg2 | Required | number |  | Is a contiguous range of cells containing possible lookup values, an array of values, or a reference to an array. |
| arg3 | Required | number |  | Is a number 1, 0, or -1 indicating which value to return.. |

## Returns

number, string, boolean