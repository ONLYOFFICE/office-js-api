// This example specifies an amount of space which shall be left between the left extent of the current cell contents and the left edge border of a specific individual table cell within a table.

// How to set cell left margin with its fill color.

// Create table and set its cell left margin.

var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
var oRow = oTable.GetRow(0);
var oCell = oRow.GetCell(0);
var oContent = oCell.GetContent();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is just a sample text.");
oContent.Push(oParagraph);
oCell.SetCellMarginLeft(720);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);