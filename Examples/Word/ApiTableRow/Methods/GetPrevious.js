// This example shows how to get the previous row.
let document = Api.GetDocument();
let tableStyle = document.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(document.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
let row = table.GetRow(1);
row.GetCell(1).GetContent().GetElement(0).AddText("Second row");
row.GetPrevious().GetCell(1).GetContent().GetElement(0).AddText("First row");
document.Push(table);