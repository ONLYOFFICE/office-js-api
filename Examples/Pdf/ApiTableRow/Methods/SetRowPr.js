// Set the properties for a table row in a PDF.

// Apply a set of row properties to a table row at once in a PDF.

// Set the height of the first row using row properties in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const row = table.GetRow(0);
const rowPr = Api.CreateTableRowPr();
rowPr.SetHeight('atLeast', 720 * 3);
row.SetRowPr(rowPr);

page.AddObject(table);
