// Insert a new row into a table in a PDF

// Can I add more rows to an existing table in a PDF?

// Attach a row at a specific position within a table in a PDF

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
table.AddRow(1, true);
const row = table.GetRow(1);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("New row was added here.");
content.Push(paragraph);

page.AddObject(table);