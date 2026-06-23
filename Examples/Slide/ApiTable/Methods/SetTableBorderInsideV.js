// This example sets the border displayed between vertical columns inside the table.

// How to add inner vertical borders to a table.

// Create a 3x3 table and set the vertical inner borders.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
table.SetTableBorderTop("single", 4, 0, 51, 51, 51);
table.SetTableBorderBottom("single", 4, 0, 51, 51, 51);
table.SetTableBorderLeft("single", 4, 0, 51, 51, 51);
table.SetTableBorderRight("single", 4, 0, 51, 51, 51);
table.SetTableBorderInsideH("single", 4, 0, 51, 51, 51);
table.SetTableBorderInsideV("single", 8, 0, 255, 111, 61);
slide.RemoveAllObjects();
slide.AddObject(table);
