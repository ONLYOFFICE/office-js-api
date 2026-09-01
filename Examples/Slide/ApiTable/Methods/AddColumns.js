// Add new columns to the table in a presentation.

// Useful for adding multiple columns to a table at once.

// Create a table and add two columns after the first column.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 2);
const cell = table.GetCell(0, 0);
table.AddColumns(cell, 2);
const paragraph = Api.CreateParagraph();
paragraph.AddText("Two columns added. Total columns: " + table.GetRow(0).GetCellsCount());
cell.GetContent().Push(paragraph);
table.SetSize(200*36000, 100*36000);
slide.RemoveAllObjects();
slide.AddObject(table);
