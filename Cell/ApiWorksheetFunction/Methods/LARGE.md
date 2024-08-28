# LARGE

Returns the k-th largest value in a data set. For example, the fifth largest number.

## Syntax

expression.LARGE(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) &#124;Array.&lt;number&gt; |  | The array or range of data for which the k-th largest value will be determined. |
| arg2 | Required | number |  | The position (from the largest) in the array or cell range of data to return. |

## Returns

number