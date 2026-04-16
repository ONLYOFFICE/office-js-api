// How to set a height of the row in a PDF document.

// Create a table and change its rows height in a PDF document.

// Set height using a table row object in a PDF document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
row.SetHeight(30 * 36000);

page.AddObject(table);