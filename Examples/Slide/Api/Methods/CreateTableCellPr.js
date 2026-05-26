// Create empty table cell properties and apply custom width to a cell in a presentation.

// Api.CreateTableCellPr returns an ApiTableCellPr object that can be configured and applied to a table cell.

// Build a table, create cell properties with a fixed width, and apply them to the first cell in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const cell = table.GetCell(0, 0);
const cellPr = Api.CreateTableCellPr();
cellPr.SetWidth("twips", 1440);
cell.SetCellPr(cellPr);
slide.RemoveAllObjects();
slide.AddObject(table);
