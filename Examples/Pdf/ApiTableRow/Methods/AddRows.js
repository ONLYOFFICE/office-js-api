// Add new rows to a table starting from a row in a PDF.

// How do I insert rows right after a specific row in a table in a PDF?

// Insert two new rows after the first row in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const row = table.GetRow(0);
const para = Api.CreateParagraph();
para.AddText('First row');
row.GetCell(0).GetContent().Push(para);
row.AddRows(2, false);

page.AddObject(table);
