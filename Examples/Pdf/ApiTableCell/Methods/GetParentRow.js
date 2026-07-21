// Get the parent row of a table cell in a PDF.

// How do I access the row that contains a given cell in a PDF?

// Get the parent row and set its height in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const cell = table.GetRow(0).GetCell(0);
const para = Api.CreateParagraph();
para.AddText('Cell 1');
cell.GetContent().Push(para);
const parentRow = cell.GetParentRow();
parentRow.SetHeight(50 * 36000);

page.AddObject(table);
