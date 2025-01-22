// This example shows how to get the parent table of the row.
let document = Api.GetDocument();
let tableStyle = document.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(document.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
table.SetWidth("percent", 100);
let row = table.GetRow(0);
let parentTable = row.GetParentTable();
parentTable.SetTableBorderBottom("single", 32, 0, 51, 51, 51);
document.Push(parentTable);