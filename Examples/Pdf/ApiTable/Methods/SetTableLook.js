// How to set a table look with options in a PDF document.

// Create the table object and set its look in a PDF document.

// Use table to set table look in a PDF document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
table.SetTableLook(true, false, false, false, false, true);

page.AddObject(table);