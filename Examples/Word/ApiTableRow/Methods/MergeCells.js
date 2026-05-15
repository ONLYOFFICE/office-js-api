// Combine all cells in a table row into a single cell in a document.

// How do I join every cell across a row so they become one in a document?

// Collapse a row's individual cells into one unified cell to span the full width in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
let row = table.GetRow(0);
table.SetWidth("percent", 100);
row.MergeCells();
doc.Push(table);