// Add new rows to a table via one of its cells in a PDF.

// How do I insert rows right after a specific cell in a PDF table?

// Add two rows after the first cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const cell = table.GetRow(0).GetCell(0);
const paragraph = Api.CreateParagraph();
paragraph.AddText('Two new rows added after this cell.');
cell.GetContent().Push(paragraph);
cell.AddRows(2, false);

page.AddObject(table);
