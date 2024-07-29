# VAR_P

Calculates variance based on the entire population (ignores logical values and text in the population).

## Syntax

expression.VAR_P(args);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number &#124;string &#124;[ApiRange](../../ApiRange/ApiRange.md) &#124;Array.<number> |  | Up to 255 numeric values for which the variance will be calculated. The first argument is required, subsequent arguments are optional. |

## Returns

number