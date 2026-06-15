// Read the height of a table row in a PDF.

// How do I find out how tall a table row is in a PDF?

// Retrieve the current row height measurement in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
page.AddObject(table);

const row = table.GetRow(0);
row.SetHeight(30 * 36000);
const rowHeight = row.GetHeight();
row.GetCell(0).AddText("Row height: " + rowHeight);
