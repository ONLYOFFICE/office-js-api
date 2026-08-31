// Get the parent table of a row in a presentation.

// Useful for getting the table that contains the row.

// Get the parent table from a row and set its border.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const row = table.GetRow(0);
const parentTable = row.GetParentTable();
parentTable.SetTableBorderBottom("single", 32, 0, 51, 51, 51);
slide.RemoveAllObjects();
slide.AddObject(table);