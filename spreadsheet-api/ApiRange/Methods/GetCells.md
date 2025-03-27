# GetCells

Returns a Range object that represents all the cells in the specified range or a specified cell.

## Syntax

```javascript
expression.GetCells(row, col);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| row | Required | number |  | The row number or the cell number (if only row is defined). |
| col | Required | number |  | The column number. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

This example shows how to get a Range object that represents all the cells in the specified range or a specified cell.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:C3");
range.GetCells(2, 1).SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
```
