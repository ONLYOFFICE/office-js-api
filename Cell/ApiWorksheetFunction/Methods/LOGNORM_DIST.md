# LOGNORM_DIST

Returns the lognormal distribution of x, where ln(x) is normally distributed with the specified parameters.

## Syntax

expression.LOGNORM_DIST(arg1, arg2, arg3, arg4);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | The value at which to evaluate the function, a positive number. |
| arg2 | Required | number |  | The mean of ln(x). |
| arg3 | Required | number |  | The standard deviation of ln(x), a positive number. |
| arg4 | Required | boolean |  | A logical value (**true** or **false**) that determines the function form. If it is **true**, the function returns the cumulative distribution function. If it is **false**, the function returns the probability density function. |

## Returns

number