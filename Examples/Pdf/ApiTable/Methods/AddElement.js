// Add a paragraph at a specific position inside a table cell in a PDF.

// How do I insert a document element into a specific cell of a table in a PDF?

// Create a table and add a paragraph as the first element of its first cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 2);
page.AddObject(table);
const cell = table.GetCell(0, 0);
const paragraph = Api.CreateParagraph();
paragraph.AddText('Inserted paragraph');
table.AddElement(cell, 0, paragraph);
