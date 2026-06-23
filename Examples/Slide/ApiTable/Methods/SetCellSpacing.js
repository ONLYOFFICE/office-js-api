// This example specifies the default spacing between cells in the table.

// How to set the cell spacing for a table.

// Create a table and set cell spacing to half an inch.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
table.SetCellSpacing(720);
slide.RemoveAllObjects();
slide.AddObject(table);
