// Get the column index of a table cell in a PDF.

// How do I find out the position of a cell within its row in a PDF?

// Retrieve the cell index and display it in the cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
const cell = table.GetRow(0).GetCell(1);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Cell index: ' + cell.GetIndex());
content.Push(paragraph);

page.AddObject(table);
