// This example merges an array of cells.

// How to get two cells by their position index and merge them into one.

// Create a table, create cells and merge them into one.

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