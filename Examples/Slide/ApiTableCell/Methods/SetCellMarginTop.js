// This example specifies an amount of space which shall be left between the top extent of the current cell contents and the top edge border of a specific individual table cell within a table.

// How to set the cell top margin for the current table cell.

// Specify the top margin value for the ApiTableCell object.

var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
var oRow = oTable.GetRow(0);
var oCell = oRow.GetCell(0);
var oContent = oCell.GetContent();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is just a sample text.");
oContent.Push(oParagraph);
oCell.SetCellMarginTop(720);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);