# TREND

Returns numbers in a linear trend matching known data points, using the least squares method.

## Syntax

expression.TREND(arg1, arg2, arg3, arg4);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) &#124;Array.&lt;number&gt; |  | A range or array of y-values from the <em>y = mx + b</em> equation. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) &#124;Array.&lt;number&gt; |  | An optional range or array of x-values from the <em>y = mx + b</em> equation, an array of the same size as an array of y-values. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) &#124;Array.&lt;number&gt; |  | A range or array of new x-values for which this function will return corresponding y-values. |
| arg4 | Required | boolean |  | A logical value: the constant <em>b</em> is calculated normally if this parameter is set to **true** or omitted, and <em>b</em> is set equal to 0 if the parameter is **false**. |

## Returns

number