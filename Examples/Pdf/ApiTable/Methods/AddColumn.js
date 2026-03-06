// How to insert a column to the table.

// Create a 2x4 table, set its position and then insert a column to it.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
table.SetPosition(3, 170);
table.AddColumn(1, true);
const row = table.GetRow(0);
const cell = row.GetCell(1);
const content = cell.GetContent();

const paragraph = Api.CreateParagraph();
paragraph.AddText("New column was added here.");
content.Push(paragraph);

page.AddObject(table);