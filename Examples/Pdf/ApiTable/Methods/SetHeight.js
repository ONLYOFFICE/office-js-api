// Set the total height of a table in a PDF.

// How do I make a table a specific overall height in a PDF?

// Distribute the requested height proportionally among the table rows in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
page.AddObject(table);
table.SetHeight(Api.MillimetersToEmus(80));
