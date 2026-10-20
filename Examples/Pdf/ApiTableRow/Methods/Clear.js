// Clear the content of a table row in a PDF.

// Remove all content from a row while keeping the row itself in a PDF.

// Add text to the first row and then clear it in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const row = table.GetRow(0);
const para = Api.CreateParagraph();
para.AddText('This text will be cleared');
row.GetCell(0).GetContent().Push(para);
row.Clear();
const para2 = Api.CreateParagraph();
para2.AddText('First row was cleared');
table.GetRow(1).GetCell(0).GetContent().Push(para2);

page.AddObject(table);
