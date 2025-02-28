// This example creates a 2x4 table and inserts it into the presentation.

// How to create new table with two rows and four columns.

// Add a table to the presentation.

var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);