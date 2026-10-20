// Select a table in a PDF to make it the current selection.

// Programmatically select a table in a PDF.

// Add a table to the page, select it, then change its background color.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
table.SetPosition(0, 0);
page.AddObject(table);
table.Select();
table.SetBackgroundColor(Api.RGB(0, 122, 204));
