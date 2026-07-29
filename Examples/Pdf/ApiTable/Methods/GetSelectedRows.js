// Get the selected rows from a table in a PDF.

// Retrieve the rows that contain the currently selected cells in a table in a PDF.

// Select a cell and read back the rows that contain the selection in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(4, 3);
table.GetCell(0, 0).Select();
const selectedRows = table.GetSelectedRows();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Selected rows count: ' + selectedRows.length);
table.GetCell(0, 0).GetContent().Push(paragraph);

page.AddObject(table);
