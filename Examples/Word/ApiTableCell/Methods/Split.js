// Divide a table cell into multiple rows and columns in a document.

// How do I split one table cell into several smaller cells in a document?

// Break a single cell apart into a grid of cells to reorganize a table in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let cell = table.GetCell(0, 0);
cell.Split(2, 2);