# F_DIST

Returns the (left-tailed) F probability distribution (degree of diversity) for two data sets.

## Syntax

expression.F_DIST(arg1, arg2, arg3, arg4);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | The value at which to evaluate the function, a nonnegative number. |
| arg2 | Required | number |  | The numerator degrees of freedom, a number between 1 and 10^10, excluding 10^10. |
| arg3 | Required | number |  | The denominator degrees of freedom, a number between 1 and 10^10, excluding 10^10. |
| arg4 | Required | boolean |  | A logical value that determines the function form. If this parameter is **true**, the function will return the cumulative distribution function, if it is **false**, it will return the probability density function. |

## Returns

number