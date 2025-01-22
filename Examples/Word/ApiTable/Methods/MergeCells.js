// This example merges an array of cells.
let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(5, 5);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let cell = table.MergeCells([table.GetRow(1).GetCell(1), table.GetRow(1).GetCell(2), table.GetRow(2).GetCell(1), table.GetRow(2).GetCell(2)]);
cell.GetContent().GetElement(0).AddText("Merged cell");
doc.Push(table);