// This example gets a class type and pastes it into the presentation.

// How to get a class type of ApiTableRow.

// Retrieve class type of ApiTableRow object and insert it to the slide.

var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
var oRow = oTable.GetRow(0);
var oCell = oRow.GetCell(0);
var oContent = oCell.GetContent();
var oParagraph = Api.CreateParagraph();
var sClassType = oRow.GetClassType();
oParagraph.AddText("Class type: " + sClassType);
oContent.Push(oParagraph);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);