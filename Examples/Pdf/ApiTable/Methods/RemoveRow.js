// Delete a row from a table in a PDF.

// How do I remove an unwanted row from a table in a PDF?

// Take out a horizontal row of cells from your table in a PDF.

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