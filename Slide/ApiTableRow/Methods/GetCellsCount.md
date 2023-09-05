# GetCellsCount

Returns a number of cells in the current row.

## Syntax

expression.GetCellsCount();

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Number

## Example

This example gets a number of cells in the row.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
var oRow = oTable.GetRow(0);
var nCellsCount = oRow.GetCellsCount();
var oCell = oRow.GetCell(0);
var oContent = oCell.GetContent();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("The number of cells in the row: " + nCellsCount);
oContent.Push(oParagraph);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);
builder.SaveFile("pptx", "GetCellsCount.pptx");
builder.CloseFile();
```