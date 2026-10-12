// Get the index of a table row in a PDF.

// Find out the position of a row within a table in a PDF.

// Get the index of the second row and display it in the first cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const row = table.GetRow(1);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Row index: ' + row.GetIndex());
content.Push(paragraph);

page.AddObject(table);
