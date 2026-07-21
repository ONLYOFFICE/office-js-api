// Get the parent table of a row in a PDF.

// How do I access the table that contains a given row in a PDF?

// Get the parent table from a row and change its background color in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const row = table.GetRow(0);
const parentTable = row.GetParentTable();
parentTable.SetBackgroundColor(Api.RGB(51, 133, 255));

page.AddObject(table);
