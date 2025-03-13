// This example specifies the shading which shall be applied to the extents of the table.

// How to add a shading to the table background.

// Create a table, set its shading color and add it to the slide.

var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
oTable.SetShd("clear", 255, 111, 61);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);