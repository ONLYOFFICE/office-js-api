# NEGBINOMDIST

Returns the negative binomial distribution, the probability that there will be the specified number of failures before the last success, with the specified probability of a success.

## Syntax

expression.NEGBINOMDIST(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | The number of failures. |
| arg2 | Required | number |  | The threshold number of successes. |
| arg3 | Required | number |  | The probability of a success; a number between 0 and 1. |

## Returns

number