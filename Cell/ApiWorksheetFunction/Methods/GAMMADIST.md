# GAMMADIST

Returns the gamma distribution.

## Syntax

expression.GAMMADIST(arg1, arg2, arg3, arg4);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | The value at which the distribution will be calculated, a nonnegative number. |
| arg2 | Required | number |  | The alpha parameter of the distribution, a positive number. |
| arg3 | Required | number |  | The beta parameter of the distribution, a positive number. If this parameter is equal to 1, the function returns the standard gamma distribution. |
| arg4 | Required | boolean |  | A logical value (**true**> or **false**) that determines the function form. If it is **true**, the function returns the cumulative distribution function. If it is **false**, the function returns the probability density function. |

## Returns

number