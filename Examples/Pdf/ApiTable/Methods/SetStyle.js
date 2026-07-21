// Apply a named table style from the document to the current table in a PDF.

// How do I look up a built-in table style by name and apply it in a PDF?

// Create a table, retrieve an available style by name, and apply it in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
page.AddObject(table);
const style = doc.GetStyle('Medium Style 2 - Accent 2');
table.SetStyle(style);
table.GetCell(0, 0).AddText('Set style for table: ' + style.GetName());
