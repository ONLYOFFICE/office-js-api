# MergeCells

Merges an array of cells. If merge is successful, it will return merged cell, otherwise "null". **Warning**: The number of cells in any row and the number of rows in the current table may be changed.

## Syntax

expression.MergeCells(aCells);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| aCells | Required | Array<[ApiTableCell](../../ApiTableCell/ApiTableCell.md)> | The array of cells. |

## Returns

[ApiTableCell](../../ApiTableCell/ApiTableCell.md) &#124; null

## Example

This example merges an array of cells.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
var oRow = oTable.GetRow(0);
var oCell1 = oRow.GetCell(0);
var oCell2 = oRow.GetCell(1);
oTable.MergeCells([oCell1, oCell2]);
var oCell = oRow.GetCell(0);
var oContent = oCell.GetContent();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This cell was formed by merging two cells.");
oContent.Push(oParagraph);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);
builder.SaveFile("pptx", "MergeCells.pptx");
builder.CloseFile();
```