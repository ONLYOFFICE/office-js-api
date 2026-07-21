// Set the background color for an entire table column in a PDF.

// How do I color the background of a whole column via one of its cells in a PDF?

// Set an orange background for the entire first column in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 4);
const cell = table.GetRow(0).GetCell(0);
cell.SetColumnBackgroundColor(255, 111, 61, false);

page.AddObject(table);
