// This example adds a new row to the table.

// How to insert a row to the table.

// Create a 2x4 table, set its position and then insert a row to it.

var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
oTable.AddRow(1, true);
var oRow = oTable.GetRow(1);
var oCell = oRow.GetCell(0);
var oContent = oCell.GetContent();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("New row was added here.");
oContent.Push(oParagraph);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);