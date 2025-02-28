// This example shows how to set table lock.

// How to set a table lock with options.

// Create a table and set its lock type.

var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
oTable.SetTableLook(true, false, false, false, false, true);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);