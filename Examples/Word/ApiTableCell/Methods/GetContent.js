// This example shows how to get the current cell content.

// How to get the value from the cell.

// Retrieve the content of the table cell.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let cell = table.GetRow(0).GetCell(0);
cell.GetContent().GetElement(0).AddText("Cell #1");
table.SetStyle(tableStyle);
doc.Push(table);