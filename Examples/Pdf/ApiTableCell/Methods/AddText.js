// Append text to the last paragraph in a table cell in a PDF.

// How do I add text to a table cell in a PDF?

// Insert a sentence into the last paragraph of a cell to populate a table in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 2);
const cell = table.GetRow(0).GetCell(0);
cell.AddText("Cell content.");

page.AddObject(table);
