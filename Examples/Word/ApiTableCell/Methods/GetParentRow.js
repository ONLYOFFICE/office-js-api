// This example shows how to get a parent row of the cell.

// How to get parent row of the cell.

// Retrieve the cell from the table and get the height of its parent row.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
let parentRow = table.GetCell(0, 0).GetParentRow();
parentRow.SetHeight("atLeast", 720);