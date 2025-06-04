// This example merges the cells in the row.

// Merge cells of the entire row.

// Combine the entire row cells.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
let row = table.GetRow(0);
table.SetWidth("percent", 100);
row.MergeCells();
doc.Push(table);