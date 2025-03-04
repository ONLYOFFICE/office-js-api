# MergeCells

Merges an array of cells. If merge is successful, it will return merged cell, otherwise "null".**Warning**: The number of cells in any row and the number of rows in the current table may be changed.

## Syntax

```javascript
expression.MergeCells(aCells);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aCells | Required | [ApiTableCell](../../ApiTableCell/ApiTableCell.md)[] |  | The array of cells. |

## Returns

[ApiTableCell](../../ApiTableCell/ApiTableCell.md)

## Example

This example merges an array of cells.

```javascript editor-pptx
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
```
