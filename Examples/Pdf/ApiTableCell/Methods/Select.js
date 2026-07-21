// Select a table cell in a PDF to make it the current selection.

// How do I programmatically select a single cell inside a table in a PDF?

// Create a table, select one of its cells, then change its background color.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
page.AddObject(table);
const cell = table.GetRow(1).GetCell(1);
cell.Select();
cell.SetBackgroundColor(0, 122, 204, false);
