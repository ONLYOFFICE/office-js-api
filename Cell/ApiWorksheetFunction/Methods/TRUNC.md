# TRUNC

Truncates a number to an integer by removing the decimal, or fractional, part of the number.

## Syntax

expression.TRUNC(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | Is the number you want to truncate. |
| arg2 | Required | number |  | Is a number specifying the precision of the truncation, 0 (zero) if omitted. |

## Returns

number, string, boolean