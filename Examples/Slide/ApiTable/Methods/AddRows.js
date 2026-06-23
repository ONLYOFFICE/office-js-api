// This example adds new rows to the table.

// How to add multiple rows to a table at once.

// Create a table and add two rows after the first row.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 2);
const cell = table.GetCell(0, 0);
table.AddRows(cell, 2);
const paragraph = Api.CreateParagraph();
paragraph.AddText("Two rows were added. Total rows: " + table.GetRowsCount());
cell.GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
