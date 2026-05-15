// Insert a table with multiple rows and columns in a PDF.

// How do I add a table to a PDF page?

// Create and place a table with specific dimensions in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const table = Api.CreateTable(2, 4);
page.AddObject(table);