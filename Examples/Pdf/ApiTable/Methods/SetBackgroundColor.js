// Set the background color for all cells in a table in a PDF.

// How do I apply one background color to an entire table in a PDF?

// Create a table and apply an orange background color to all cells in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
const color = Api.RGB(255, 111, 61);
table.SetBackgroundColor(color);

page.AddObject(table);
