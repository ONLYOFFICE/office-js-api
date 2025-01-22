// This example removes the table row.
let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
let row = table.GetRow(0);
row.GetCell(0).GetContent().GetElement(0).AddText("First row");
row.Remove();
doc.Push(table);