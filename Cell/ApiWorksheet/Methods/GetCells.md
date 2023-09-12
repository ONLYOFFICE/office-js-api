# GetCells

Returns the ApiRange that represents all the cells on the worksheet (not just the cells that are currently in use).

## Syntax

expression.GetCells(row, col);

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| row | Required | Number | The row number or the cell number (if only row is defined). |
| col | Required | Number | The column number. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) &#124; null

## Example

This example shows how to get the ApiRange that represents all the cells on the worksheet.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oCells = oWorksheet.GetCells();
oCells.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
builder.SaveFile("xlsx", "GetCells.xlsx");
builder.CloseFile();
```