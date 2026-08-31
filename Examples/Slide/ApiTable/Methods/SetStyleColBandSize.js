// Specify the number of columns in each column band of the table style in a presentation.

// Useful for setting the column band size for a table.

// Create a table and set column band size to 2.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(8, 6);
table.SetTableLook(false, false, false, false, false, true);
table.SetStyleColBandSize(2);
slide.RemoveAllObjects();
slide.AddObject(table);