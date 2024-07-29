# EXPONDIST

Returns the exponential distribution.

## Syntax

expression.EXPONDIST(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | The value of the x function, a nonnegative number. |
| arg2 | Required | number |  | The lambda parameter value, a positive number. |
| arg3 | Required | boolean |  | A logical value that determines the function form. If this parameter is **true**,the function will return the cumulative distribution function, if it is **false**, it will return the probability density function. |

## Returns

number