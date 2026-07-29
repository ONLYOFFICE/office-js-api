// Select a rectangular range of cells in a table in a PDF.

// Highlight a block of cells spanning several rows and columns to apply changes to them.

// Select the cells from the first cell of the first row to the second cell of the second row.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const table = Api.CreateTable(3, 3);
page.AddObject(table);
table.SelectRange(0, 0, 1, 1);
const selectedCells = table.GetSelectedCells();
