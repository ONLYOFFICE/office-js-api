// Set the background color for all cells in a table row in a PDF.

// How do I color the background of an entire table row in a PDF?

// Set an orange background for the second row in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const row = table.GetRow(1);
row.SetBackgroundColor(255, 111, 61, false);

page.AddObject(table);
