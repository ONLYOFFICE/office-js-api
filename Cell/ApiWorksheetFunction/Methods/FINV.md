# FINV

Returns the inverse of the (right-tailed) F probability distribution: if p = FDIST(x,...), then FINV(p,...) = x.

## Syntax

expression.FINV(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | A probability associated with the F cumulative distribution, a number between 0 and 1 inclusive. |
| arg2 | Required | number |  | The numerator degrees of freedom, a number between 1 and 10^10, excluding 10^10. |
| arg3 | Required | number |  | The denominator degrees of freedom, a number between 1 and 10^10, excluding 10^10. |

## Returns

number