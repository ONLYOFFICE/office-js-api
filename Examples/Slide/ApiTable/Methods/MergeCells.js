// Merge an array of cells into one.

// Get two cells by their position index and merge them.

// Create a table, obtain two cells, and merge them together.

const presentation = Api.GetPresentation();

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell1 = row.GetCell(0);
const cell2 = row.GetCell(1);
table.MergeCells([cell1, cell2]);

const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This cell was formed by merging two cells.");
content.Push(paragraph);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(table);