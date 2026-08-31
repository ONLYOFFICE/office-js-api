// Remove the row containing a cell in a PDF.

// Delete a table row by referencing one of its cells in a PDF.

// Get the first cell and remove its entire row in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
const cell = table.GetRow(0).GetCell(0);
const para = Api.CreateParagraph();
para.AddText('This row will be removed.');
cell.GetContent().Push(para);
cell.RemoveRow();

page.AddObject(table);
