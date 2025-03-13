// This example specifies the vertical alignment for text within the current table cell.

// How to set the cell text vertical alignment.

// Create a table and set the text alignment of its cell from the row.

var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
var oRow = oTable.GetRow(1);
oRow.SetHeight(30 * 36000);
var oCell = oRow.GetCell(0);
var oContent = oCell.GetContent();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is just a sample text.");
oContent.Push(oParagraph);
oCell.SetVerticalAlign("bottom");
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);