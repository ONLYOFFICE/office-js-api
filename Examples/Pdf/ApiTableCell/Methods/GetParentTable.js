// Get the parent table of a table cell in a PDF.

// Access the table that contains a given cell in a PDF.

// Get the parent table and change its background color in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const cell = table.GetRow(0).GetCell(0);
const parentTable = cell.GetParentTable();
parentTable.SetBackgroundColor(Api.RGB(51, 133, 255));

page.AddObject(table);
