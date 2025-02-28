// This example gets a number of cells in the row.

// How to return a number of cells from the row.

// Create table, count its cells and display it the slide.

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