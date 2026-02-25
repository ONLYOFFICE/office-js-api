// How to return a cell using its row index.

// Create a table, get its row and get a cell from this row.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is a sample text in the cell of the first row.");
content.Push(paragraph);

page.AddObject(table);