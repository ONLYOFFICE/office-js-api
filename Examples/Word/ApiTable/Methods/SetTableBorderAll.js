// Add a uniform border around and inside a table in a document.

// How do I apply the same border style to every edge of a table in a document?

// Give a table a consistent outline and interior grid by setting all borders at once in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and add 4 point black border for the entrire table:");
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetTableBorderAll("single", 32, 0, 51, 51, 51);
doc.Push(table);