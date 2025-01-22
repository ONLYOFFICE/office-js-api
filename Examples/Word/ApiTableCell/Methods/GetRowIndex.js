// This example shows how to get an index of the parent row.
let document = Api.GetDocument();
let tableStyle = document.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(document.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
document.Push(table);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Row index: " + table.GetCell(0, 0).GetRowIndex());