// Create a 3x3 table and insert it into the document.

// Create a table, add it to the document, and set its width to 100%.

// How to create the table object and add it to the document class.

let doc = Api.GetDocument();
let table = Api.CreateTable(3, 3);
doc.Push(table);
table.SetWidth("percent", 100);