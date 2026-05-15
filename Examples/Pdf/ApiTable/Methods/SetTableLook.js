// Configure the styling options for a table in a PDF.

// How do I customize how a table looks in a PDF?

// Apply formatting rules to change the table appearance in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
table.SetTableLook(true, false, false, false, false, true);

page.AddObject(table);