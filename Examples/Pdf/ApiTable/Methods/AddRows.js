// Add new rows to a table in a PDF.

// How do I insert several rows into a table at once in a PDF?

// Create a table and add two rows after the first cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 2);
const cell = table.GetCell(0, 0);
table.AddRows(cell, 2);
const paragraph = Api.CreateParagraph();
paragraph.AddText('Two rows were added. Total rows: ' + table.GetRowsCount());
cell.GetContent().Push(paragraph);

page.AddObject(table);
