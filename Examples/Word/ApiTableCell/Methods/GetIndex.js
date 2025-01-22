// This example shows how to get the cell index.
let document = Api.GetDocument();
let tableStyle = document.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(document.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
document.Push(table);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell index: " + table.GetCell(0, 0).GetIndex());