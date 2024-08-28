# SMALL

Returns the k-th smallest value in a data set. For example, the fifth smallest number.

## Syntax

expression.SMALL(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | Array.&lt;number&gt; &#124;[ApiRange](../../ApiRange/ApiRange.md) |  | An array or range of numerical data for which the k-th smallest value will be determined. |
| arg2 | Required | number |  | The position (from the smallest) in the array or range of the value to return. |

## Returns

number