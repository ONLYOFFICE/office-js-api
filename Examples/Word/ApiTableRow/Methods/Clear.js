// This example clears the content from the row.
let document = Api.GetDocument();
let tableStyle = document.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(document.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
let row = table.GetRow(0);
row.GetCell(0).GetContent().GetElement(0).AddText("First row");
row.Clear();
row = table.GetRow(1);
row.GetCell(0).GetContent().GetElement(0).AddText("The first row content was cleared.");
document.Push(table);