// How to set the cell left margin for the current table cell.

// Specify the left margin value for the ApiTableCell object.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample text.");
content.Push(paragraph);
cell.SetCellMarginLeft(720);

page.AddObject(table);
