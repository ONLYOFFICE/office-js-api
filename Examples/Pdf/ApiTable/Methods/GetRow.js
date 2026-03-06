// How to get a row object from the table.

// Create a table, add rows and columns, then get its row by index.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
table.AddRow(1, true);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is a sample text in the first row.");
content.Push(paragraph);

page.AddObject(table);