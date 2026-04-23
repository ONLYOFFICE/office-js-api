// Insert a 3×3 table spanning the full page width in a document.

// How do I add a table to a document?

// Build a new table and stretch it to fill the entire line width in a document.

let doc = Api.GetDocument();
let table = Api.CreateTable(3, 3);
doc.Push(table);
table.SetWidth("percent", 100);