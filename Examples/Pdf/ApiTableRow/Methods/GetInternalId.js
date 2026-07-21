// Get the internal identifier of a table row in a PDF.

// How do I get a unique identifier for a table row in a PDF?

// Retrieve the internal id and display it in the first cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Internal id: ' + row.GetInternalId());
content.Push(paragraph);

page.AddObject(table);
