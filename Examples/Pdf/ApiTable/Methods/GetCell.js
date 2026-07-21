// Get a table cell by its row and column index in a PDF.

// How do I access a specific cell in a table in a PDF?

// Create a table and add text to the cell at row 0, column 1 in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
const cell = table.GetCell(0, 1);
const paragraph = Api.CreateParagraph();
paragraph.AddText('Row 0, Col 1');
cell.GetContent().Push(paragraph);

page.AddObject(table);
