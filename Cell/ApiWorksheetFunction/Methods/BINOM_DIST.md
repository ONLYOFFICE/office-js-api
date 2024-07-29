# BINOM_DIST

Returns the individual term binomial distribution probability.

## Syntax

expression.BINOM_DIST(arg1, arg2, arg3, arg4);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | The number of successes in trials. |
| arg2 | Required | number |  | The number of independent trials. |
| arg3 | Required | number |  | The probability of success on each trial. |
| arg4 | Required | boolean |  | Specifies if this is the cumulative distribution function (**true**) or the probability mass function (**false**). |

## Returns

number