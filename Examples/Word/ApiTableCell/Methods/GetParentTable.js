// This example shows how to get a parent table of the cell.

// How to get parent table of the cell.

// Retrieve the cell from the table and get the height of its parent table.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
let parentTable = table.GetCell(0, 0).GetParentTable();
parentTable.SetTableBorderTop("single", 32, 0, 51, 51, 51);