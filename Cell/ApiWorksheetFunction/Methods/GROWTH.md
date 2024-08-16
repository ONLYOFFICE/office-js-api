# GROWTH

Calculates predicted exponential growth by using existing data.

## Syntax

expression.GROWTH(arg1, arg2, arg3, arg4);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) &#124;Array.<number> |  | The set of y-values from the <em>y = b*m^x</em> equation, an array or range of positive numbers. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) &#124;Array.<number> |  | An optional set of x-values from the <em>y = b*m^x</em> equation, an array or range of positive numbers that has the same size as the set of y-values. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) &#124;Array.<number> |  | New x-values for which the function will return the corresponding y-values. |
| arg4 | Required | boolean |  | A logical value: the constant <em>b</em> is calculated normally if this parameter is set to **true**, and <em>b</em> is set equal to 1 if the parameter is **false** or omitted. |

## Returns

number