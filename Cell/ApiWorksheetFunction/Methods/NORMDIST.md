# NORMDIST

Returns the normal cumulative distribution for the specified mean and standard deviation.

## Syntax

expression.NORMDIST(arg1, arg2, arg3, arg4);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | The value for which the distribution will be returned. |
| arg2 | Required | number |  | The arithmetic mean of the distribution. |
| arg3 | Required | number |  | The standard deviation of the distribution, a positive number. |
| arg4 | Required | boolean |  | A logical value (**true** or **false**) that determines the function form. If it is **true**, the function returns the cumulative distribution function. If it is **false**, the function returns the probability mass function. |

## Returns

number