# STDEVP

Calculates standard deviation based on the entire population given as arguments (ignores logical values and text).

## Syntax

expression.STDEVP(args);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number &#124;string &#124;Array.&lt;number&gt; &#124;[ApiRange](../../ApiRange/ApiRange.md) |  | Up to 255 numeric values for which the standard deviation will be calculated. The first argument is required, subsequent arguments are optional. |

## Returns

number