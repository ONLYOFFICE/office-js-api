# VARPA

Calculates variance based on the entire population, including logical values and text. Text and the **false** logical value have the value 0; the **true** logical value has the value 1.

## Syntax

expression.VARPA(args);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number &#124;string &#124;boolean &#124;[ApiRange](../../ApiRange/ApiRange.md) &#124;Array.<number> |  | Up to 255 values for which the variance will be calculated. The first argument is required, subsequent arguments are optional. |

## Returns

number