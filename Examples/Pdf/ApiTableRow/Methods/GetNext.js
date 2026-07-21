// Get the next row of a table in a PDF.

// How do I access the row that follows the current one in a table in a PDF?

// Display text in the first and second rows using GetNext in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const firstRow = table.GetRow(0);
const para = Api.CreateParagraph();
para.AddText('First row');
const para2 = Api.CreateParagraph();
para2.AddText('Second row');
firstRow.GetCell(0).GetContent().Push(para);
firstRow.GetNext().GetCell(0).GetContent().Push(para2);

page.AddObject(table);
