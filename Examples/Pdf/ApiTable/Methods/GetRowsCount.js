// Get the number of rows in a table in a PDF.

// How do I find out how many rows a table has in a PDF?

// Create a table, add a row, and display the row count in the first cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 2);
const countBefore = table.GetRowsCount();
table.AddRow(null, true);
const countAfter = table.GetRowsCount();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Rows before: ' + countBefore + ', after adding: ' + countAfter);
table.GetCell(0, 0).GetContent().Push(paragraph);

page.AddObject(table);
