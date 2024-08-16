# BINOM_DIST_RANGE

Returns the probability of a trial result using a binomial distribution.

## Syntax

expression.BINOM_DIST_RANGE(arg1, arg2, arg3, arg4);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | The number of independent trials. |
| arg2 | Required | number |  | The probability of success on each trial. |
| arg3 | Required | number |  | The minimum number of successes in the trials to calculate probability for, a numeric value greater than or equal to 0. |
| arg4 | Required | number |  | The maximum number of successes in the trials to calculate probability for, a numeric value greater than the minimum number of successes and less than or equal to trials. |

## Returns

number