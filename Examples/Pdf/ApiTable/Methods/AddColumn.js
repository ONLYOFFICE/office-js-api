// Insert a new column into a table in a PDF

// Can I add more columns to an existing table in a PDF?

// Attach a column at a specific position within a table in a PDF

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
table.SetPosition(3, 170);
table.AddColumn(table.GetRow(0).GetCell(1), true);
const row = table.GetRow(0);
const cell = row.GetCell(1);
const content = cell.GetContent();

const paragraph = Api.CreateParagraph();
paragraph.AddText("New column was added here.");
content.Push(paragraph);

page.AddObject(table);