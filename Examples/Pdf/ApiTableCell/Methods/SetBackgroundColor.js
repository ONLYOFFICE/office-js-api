// Set the background color of a table cell in a PDF.

// Color the background of a single table cell in a PDF.

// Set an orange background for the first cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const cell = table.GetRow(0).GetCell(0);
cell.SetBackgroundColor(255, 111, 61, false);

page.AddObject(table);
