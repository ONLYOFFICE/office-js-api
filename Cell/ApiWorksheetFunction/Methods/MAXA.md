# MAXA

Returns the largest value in a set of values. Does not ignore logical values and text.

## Syntax

expression.MAXA(args);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number &#124;string &#124;boolean &#124;array &#124;[ApiRange](../../ApiRange/ApiRange.md) |  | Up to 255 values (number, text, logical value) for which the largest value will be returned. The first argument is required, subsequent arguments are optional. |

## Returns

number