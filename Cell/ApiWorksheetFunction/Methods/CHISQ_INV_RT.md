# CHISQ_INV_RT

Returns the inverse of the right-tailed probability of the chi-squared distribution.

## Syntax

expression.CHISQ_INV_RT(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | A probability associated with the chi-squared distribution, a value between 0 and 1 inclusive. |
| arg2 | Required | number |  | The number of degrees of freedom, a number between 1 and 10^10, excluding 10^10. |

## Returns

number