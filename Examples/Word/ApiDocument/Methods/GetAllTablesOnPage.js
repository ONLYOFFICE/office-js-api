// Retrieve all tables on a specific page in a document.

// How do I collect every table that appears on a given page in a document?

// Remove the first row of the first table on the page to delete its header row.

let doc = Api.GetDocument();
let tableStyle = doc.GetStyle("Bordered");
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 50);
table.SetStyle(tableStyle);
doc.Push(table);
let tables = doc.GetAllTablesOnPage(0);
let row1 = tables[0].GetRow(0);
row1.Remove();