# CRITBINOM

Returns the smallest value for which the cumulative binomial distribution is greater than or equal to a criterion value.

## Syntax

expression.CRITBINOM(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | The number of Bernoulli trials. |
| arg2 | Required | number |  | The probability of success on each trial, a number between 0 and 1 inclusive. |
| arg3 | Required | number |  | The criterion value, a number between 0 and 1 inclusive. |

## Returns

number