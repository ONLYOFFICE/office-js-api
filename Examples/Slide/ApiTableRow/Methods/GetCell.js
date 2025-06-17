// This example shows how to get a cell by its position in the row.

// How to return a cell using its row index.

// Create a table, get its row and get a cell from this row.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is a sample text in the cell of the first row.");
content.Push(paragraph);

slide.RemoveAllObjects();
slide.AddObject(table);
