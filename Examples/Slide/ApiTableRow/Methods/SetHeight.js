// This example sets the height to the table row.

// How to set a height of the row.

// Create a table and change its rows height.

var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
var oRow = oTable.GetRow(0);
oRow.SetHeight(30 * 36000);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);