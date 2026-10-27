// Get the number of columns in a table in a PDF.

// Find out how many columns a table has in a PDF.

// Create a table, add a column, and display the column count in the first cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 2);
const countBefore = table.GetColumnsCount();
table.AddColumn();
const countAfter = table.GetColumnsCount();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Columns before: ' + countBefore + ', after adding: ' + countAfter);
table.GetCell(0, 0).GetContent().Push(paragraph);

page.AddObject(table);