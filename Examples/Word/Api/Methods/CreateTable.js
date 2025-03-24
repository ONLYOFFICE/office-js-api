// This example creates a 3x3 table and inserts it into the document.

// Creates a table, adds it to the document, and sets its width to 100%.

// How to create the ApiTable object and add it to the ApiDocument class.

let doc = Api.GetDocument();
let table = Api.CreateTable(3, 3);
doc.Push(table);
table.SetWidth("percent", 100);