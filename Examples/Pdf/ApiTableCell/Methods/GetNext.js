// Get the next cell in a table row in a PDF.

// Access the cell that follows the current one in a row in a PDF.

// Add text to the first cell and to the next one in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
const cell = table.GetRow(0).GetCell(0);
const para = Api.CreateParagraph();
para.AddText('Cell 1');
cell.GetContent().Push(para);
const nextCell = cell.GetNext();
const para2 = Api.CreateParagraph();
para2.AddText('Cell 2');
nextCell.GetContent().Push(para2);

page.AddObject(table);
