// Divide one table cell into a grid of smaller cells in a document.

// How do I break a single cell into multiple rows and columns in a document?

// Subdivide a cell to create a nested grid structure inside a table in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let cell = table.GetCell(0, 0);
table.Split(cell, 2, 2);