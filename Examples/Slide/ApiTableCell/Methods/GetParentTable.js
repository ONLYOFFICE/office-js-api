// Get the parent table of a table cell in a presentation.

// Useful for getting the table that contains the cell.

// Get the parent table and set its border.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const cell = table.GetRow(0).GetCell(0);
const parentTable = cell.GetParentTable();
parentTable.SetTableBorderTop("single", 32, 0, 51, 51, 51);
slide.RemoveAllObjects();
slide.AddObject(table);