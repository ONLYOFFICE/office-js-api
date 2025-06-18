// This example specifies the direction of the text flow for the current table cell.

// How to set text direction of the table cell.

// Create a table and set the text direction for the ApiTableCell object.

var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
var oRow = oTable.GetRow(0);
oRow.SetHeight(30 * 36000);
var oCell = oRow.GetCell(0);
oCell.SetTextDirection("tbrl");
var oContent = oCell.GetContent();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is just a sample text.");
oContent.Push(oParagraph);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);