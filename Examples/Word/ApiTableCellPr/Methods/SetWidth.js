// This example sets the preferred width to the current table cell.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("All cells are at least 2 inches wide:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
let tableCellPr = tableStyle.GetTableCellPr();
tableCellPr.SetWidth("twips", 2880);
table.SetStyle(tableStyle);
doc.Push(table);