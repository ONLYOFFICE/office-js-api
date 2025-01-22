// This example shows how to make search in table cell.
let document = Api.GetDocument();
let tableStyle = document.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(document.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
let row = table.GetRow(0);
row.GetCell(0).GetContent().GetElement(0).AddText("text");
row.GetCell(1).GetContent().GetElement(0).AddText("text");
row.GetCell(2).GetContent().GetElement(0).AddText("text");
document.Push(table);
let rowSearch = row.Search("tex", true);
rowSearch[1].SetBold("true");