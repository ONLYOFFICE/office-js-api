// Duplicate a table and place the copy on another page in a PDF.

// How do I make a copy of a table in a PDF?

// Create an exact duplicate of a table and add it to a new page in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
table.SetPosition(608400, 1267200);
page.AddObject(table);

const copyTable = table.Copy();
const newPage = doc.AddPage(0);
newPage.AddObject(copyTable);
