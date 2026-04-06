// How to delete a column from the table.

// Create a table, create cells and remove the whole column by its cell.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
let cell = row.GetCell(1);
table.RemoveColumn(cell);
cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("The second column was removed.");
content.Push(paragraph);

page.AddObject(table);