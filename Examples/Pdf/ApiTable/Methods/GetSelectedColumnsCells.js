// Get the cells from the selected columns of a table in a PDF.

// Retrieve all cells belonging to the currently selected columns in a table in a PDF.

// Select a cell and read back the cells of its column in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 4);
table.GetCell(0, 0).Select();
const selectedCells = table.GetSelectedColumnsCells();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Selected column cells count: ' + selectedCells.length);
table.GetCell(0, 0).GetContent().Push(paragraph);

page.AddObject(table);
