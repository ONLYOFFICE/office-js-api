// Count the total number of cells in a table row in a PDF.

// How do I find out how many cells are in a row in a PDF?

// Determine the cell count in your table row in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cellsCount = row.GetCellsCount();
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("The number of cells in the row: " + cellsCount);
content.Push(paragraph);

page.AddObject(table);