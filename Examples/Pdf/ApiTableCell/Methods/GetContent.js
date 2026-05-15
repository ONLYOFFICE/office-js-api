// Retrieve the inner content from a table cell in a PDF.

// How do I access what is stored inside a table cell in a PDF?

// Extract the document elements contained within a cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is a sample text in the cell.");
content.Push(paragraph);

page.AddObject(table);