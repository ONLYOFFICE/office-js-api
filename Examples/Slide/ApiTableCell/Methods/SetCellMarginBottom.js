// This example shows how to specify an amount of space which shall be left between the bottom extent of the cell contents and the border of a specific individual table cell within a table.

// How to set the cell bottom margin for the current table cell.

// Specify the bottom margin value for the ApiTableCell object.

var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
var oRow = oTable.GetRow(0);
var oCell = oRow.GetCell(0);
var oContent = oCell.GetContent();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is just a sample text.");
oContent.Push(oParagraph);
oCell.SetCellMarginBottom(600);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);