# NEGBINOM_DIST

Returns the negative binomial distribution, the probability that there will be the specified number of failures before the last success, with the specified probability of a success.

## Syntax

expression.NEGBINOM_DIST(arg1, arg2, arg3, arg4);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | The number of failures. |
| arg2 | Required | number |  | The threshold number of successes. |
| arg3 | Required | number |  | The probability of a success; a number between 0 and 1. |
| arg4 | Required | boolean |  | A logical value (**true** or **false**) that determines the function form. If it is **true**, the function returns the cumulative distribution function. If it is **false**, the function returns the probability density function. |

## Returns

number