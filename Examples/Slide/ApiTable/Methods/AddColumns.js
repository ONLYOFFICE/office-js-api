// This example adds new columns to the table.

// How to add multiple columns to a table at once.

// Create a table and add two columns after the first column.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 2);
const cell = table.GetCell(0, 0);
table.SetWidth("percent", 80);
table.AddColumns(cell, 2);
const paragraph = Api.CreateParagraph();
paragraph.AddText("Two columns added. Total columns: " + table.GetRow(0).GetCellsCount());
cell.GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
