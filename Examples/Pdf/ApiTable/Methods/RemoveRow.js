// How to delete a row from the table.

// Create a table, create cells and remove the whole row by its cell.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
let row = table.GetRow(0);
let cell = row.GetCell(0);
table.RemoveRow(cell);
row = table.GetRow(0);
cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("The first row was removed.");
content.Push(paragraph);

page.AddObject(table);