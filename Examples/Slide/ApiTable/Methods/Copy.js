// This example creates a copy of the table.

// How to copy a table and add it to the slide.

// Create a 2x4 table, its copy and add them to the presentation.

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
var oCopyTable = oTable.Copy();
var newSlide = Api.CreateSlide();
oPresentation.AddSlide(newSlide);
newSlide.AddObject(oCopyTable);