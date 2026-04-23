// Set the height of a table row in a PDF.

// How do I make a row taller or shorter in a PDF?

// Change the row dimensions to a specific measurement in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
row.SetHeight(30 * 36000);

page.AddObject(table);