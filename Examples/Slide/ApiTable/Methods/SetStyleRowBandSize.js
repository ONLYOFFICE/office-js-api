// Specify the number of rows that comprise each row band in the table style in a presentation.

// Useful for setting the row band size for a table.

// Create a table and set row band size to 3.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 8);
table.SetTableLook(false, false, false, false, true, false);
table.SetStyleRowBandSize(3);
slide.RemoveAllObjects();
slide.AddObject(table);
