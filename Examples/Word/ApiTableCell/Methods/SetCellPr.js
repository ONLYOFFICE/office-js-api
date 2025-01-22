// This example sets the cell properties to the current cell.
let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table1 = Api.CreateTable(3, 3);
table1.SetWidth("percent", 100);
table1.SetStyle(tableStyle);
let tableCellPr = tableStyle.GetTableCellPr();
table1.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
tableCellPr.SetCellMarginTop(720);
doc.Push(table1);
let table2 = Api.CreateTable(3, 3);
table2.SetWidth("percent", 100);
table2.SetStyle(tableStyle);
table2.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
doc.Push(table2);
table2.GetCell(0, 0).SetCellPr(tableCellPr);