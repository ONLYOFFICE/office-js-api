// Add new columns to a table via one of its cells in a PDF.

// How do I insert columns right after a specific cell in a PDF table?

// Add two columns after the first cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const cell = table.GetRow(0).GetCell(0);
const paragraph = Api.CreateParagraph();
paragraph.AddText('Two new columns added after this cell.');
cell.GetContent().Push(paragraph);
const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('Second cell.');
const lastCell = table.GetRow(0).GetCell(1);
lastCell.GetContent().Push(paragraph2);
cell.AddColumns(2, false);

page.AddObject(table);
