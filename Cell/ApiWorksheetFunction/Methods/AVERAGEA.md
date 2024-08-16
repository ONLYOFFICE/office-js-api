# AVERAGEA

Returns the average (arithmetic mean) of the specified arguments, evaluating text and **false** in arguments as 0; **true** evaluates as 1.

## Syntax

expression.AVERAGEA(args);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number &#124;string &#124;Array.<number> |  | Up to 255 numeric values for which the average value will be returned. The first argument is required, subsequent arguments are optional. Arguments can be numbers or names, arrays or references that contain numbers, text representations of numbers, or logical values, such as **true** and **false**. |

## Returns

number