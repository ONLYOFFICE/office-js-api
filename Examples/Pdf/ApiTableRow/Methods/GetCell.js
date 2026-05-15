// Access a specific cell from a table row in a PDF.

// How do I retrieve a single cell from a row in a PDF?

// Get any cell you want from a table row in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is a sample text in the cell of the first row.");
content.Push(paragraph);

page.AddObject(table);