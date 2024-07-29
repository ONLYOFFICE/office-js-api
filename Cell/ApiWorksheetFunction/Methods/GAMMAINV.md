# GAMMAINV

Returns the inverse of the gamma cumulative distribution: if p = GAMMADIST(x,...), then GAMMAINV(p,...) = x.

## Syntax

expression.GAMMAINV(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | The probability associated with the gamma distribution, a number between 0 and 1, inclusive. |
| arg2 | Required | number |  | The alpha parameter of the distribution, a positive number. |
| arg3 | Required | number |  | The beta parameter of the distribution, a positive number. If this parameter is equal to 1, the function returns the standard gamma distribution. |

## Returns

number