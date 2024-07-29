# COUNT

Counts a number of cells in a range that contains numbers ignoring empty cells or those contaning text.

## Syntax

expression.COUNT(args);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | string &#124;array &#124;[ApiRange](../../ApiRange/ApiRange.md) |  | Up to 255 items, cell references, or ranges to count numbers. The first argument is required, subsequent arguments are optional. |

## Returns

number