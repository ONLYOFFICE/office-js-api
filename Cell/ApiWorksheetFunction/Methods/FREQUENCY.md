# FREQUENCY

Calculates how often values occur within a range of values and then returns the first value of the returned vertical array of numbers.

## Syntax

expression.FREQUENCY(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) &#124;Array.&lt;number&gt; |  | An array of values or the selected range for which the frequencies will be counted (blanks and text are ignored). |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) &#124;Array.&lt;number&gt; |  | An array of intervals or the selected range into which the values in the first array will be grouped. |

## Returns

number