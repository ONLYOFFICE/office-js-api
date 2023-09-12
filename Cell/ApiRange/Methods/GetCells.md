# GetCells

Returns a Range object that represents all the cells in the specified range or a specified cell.

## Syntax

expression.GetCells(row, col);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| row | Required | Number | The row number or the cell number (if only row is defined). |
| col | Required | Number | The column number. |

## Returns

[ApiRange](../ApiRange.md)

## Example

This example shows how to get a Range object that represents all the cells in the specified range or a specified cell.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1:C3");
oRange.GetCells(2, 1).SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
builder.SaveFile("xlsx", "GetCells.xlsx");
builder.CloseFile();
```