// Set the right margin of a table cell in a PDF.

// How do I add space to the right of content inside a cell in a PDF?

// Adjust the spacing on the right side of your table cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample text.");
content.Push(paragraph);
cell.SetCellMarginRight(600);

page.AddObject(table);