# RANK

Returns the rank of a number in a list of numbers: its size relative to other values in the list.

## Syntax

expression.RANK(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | The number for which the rank will be returned. |
| arg2 | Required | Array.<number> &#124;[ApiRange](../../ApiRange/ApiRange.md) |  | An array of numbers or a reference to a list of numbers. Nonnumeric values are ignored. |
| arg3 | Required | boolean |  | The numeric value that specifyes how to order the numbers. If it is 0 or omitted, the rank in the list will be sorted in descending order. Any other numeric value means that the rank in the list will be sorted in ascending order. |

## Returns

number