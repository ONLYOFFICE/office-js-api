# ROUND

Rounds a number to a specified number of digits.

## Syntax

expression.ROUND(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | Is the number you want to round. |
| arg2 | Required | number |  | Is the number of digits to which you want to round. Negative rounds to the left of the decimal point; zero to the nearest integer. |

## Returns

number, string, boolean