// Add new columns to a table in a PDF.

// Insert several columns into a table at once in a PDF.

// Create a table and add two columns after the first cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 2);
const cell = table.GetCell(0, 0);
table.AddColumns(cell, 2);
const paragraph = Api.CreateParagraph();
paragraph.AddText('Two columns added. Total columns: ' + table.GetRow(0).GetCellsCount());
cell.GetContent().Push(paragraph);

page.AddObject(table);
