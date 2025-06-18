// This example converts the table object into the JSON object.

// How to get JSON object from the table.

// Get a slide by its index, convert its table to JSON and create another one from the JSON.

var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oTable = Api.CreateTable(2, 4);
var json = oTable.ToJSON(true);
var oTableFromJSON = Api.FromJSON(json);
var sType = oTableFromJSON.GetClassType();
var oRow = oTableFromJSON.GetRow(0);
var oCell = oRow.GetCell(0);
var oContent = oCell.GetContent();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("Class type = " + sType);
oContent.Push(oParagraph);
oSlide.AddObject(oTableFromJSON);