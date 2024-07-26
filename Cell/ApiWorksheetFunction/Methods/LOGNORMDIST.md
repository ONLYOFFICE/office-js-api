# LOGNORMDIST

Returns the cumulative lognormal distribution of x, where ln(x) is normally distributed with the specified parameters.

## Syntax

expression.LOGNORMDIST(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | The value at which to evaluate the function, a positive number. |
| arg2 | Required | number |  | The mean of ln(x). |
| arg3 | Required | number |  | The standard deviation of ln(x), a positive number. |

## Returns

number