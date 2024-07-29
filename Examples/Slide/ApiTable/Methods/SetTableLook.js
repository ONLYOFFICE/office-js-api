// This example shows how to set table lock.
var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
oTable.SetTableLook(true, false, false, false, false, true);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);