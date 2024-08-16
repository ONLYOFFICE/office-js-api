# POISSON

Returns the Poisson distribution.

## Syntax

expression.POISSON(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | The number of events. |
| arg2 | Required | number |  | The expected numeric value, a positive number. |
| arg3 | Required | boolean |  | A logical value (**true** or **false**) that determines the function form. If it is **true**, the function returns the cumulative Poisson probability. If it is **false**, the function returns the Poisson probability mass function. |

## Returns

number