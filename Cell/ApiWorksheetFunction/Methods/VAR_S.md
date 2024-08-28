# VAR_S

Estimates variance based on a sample (ignores logical values and text in the sample).

## Syntax

expression.VAR_S(args);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number &#124;string &#124;[ApiRange](../../ApiRange/ApiRange.md) &#124;Array.&lt;number&gt; |  | Up to 255 numeric values for which the variance will be calculated. The first argument is required, subsequent arguments are optional. |

## Returns

number