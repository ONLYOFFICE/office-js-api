// Insert a bordered 3x3 table spanning the full page width in a document.

// How do I add a table to a document?

// Build a new table, give it borders with a table style and stretch it to fill the entire line width in a document.

let doc = Api.GetDocument();
let table = Api.CreateTable(3, 3);
table.SetStyle(doc.GetStyle("Bordered"));
table.SetWidth("percent", 100);
doc.Push(table);