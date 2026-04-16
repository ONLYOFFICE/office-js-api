// Set a border for the entire table in a document.

// How to set table border all for a table in a document?

// Set table border all and display the result in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and add 4 point black border for the entrire table:");
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetTableBorderAll("single", 32, 0, 51, 51, 51);
doc.Push(table);