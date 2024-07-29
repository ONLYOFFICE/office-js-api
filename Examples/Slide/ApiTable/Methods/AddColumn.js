// This example adds a new column to the table.
var oPresentation = Api.GetPresentation();
oPresentation.SetSizes(300 * 36000, 190 * 36000);
var oTable = Api.CreateTable(2, 4);
oTable.SetPosition(0 * 36000, 60 * 36000);
oTable.AddColumn(1, true);
var oRow = oTable.GetRow(0);
var oCell = oRow.GetCell(1);
var oContent = oCell.GetContent();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("New column was added here.");
oContent.Push(oParagraph);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);