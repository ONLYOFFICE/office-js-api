// Specify a number of rows which will comprise each table row band for this table style in a document.

// How to set row band size in a document.

// How to style a row band size in a document.

let doc = Api.GetDocument();
doc.RemoveAllElements();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 4);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let tablePr = tableStyle.GetTablePr();
table.SetTableLook(true, true, true, true, true, true);
tablePr.SetStyleRowBandSize(2);
tableStyle.GetConditionalTableStyle("bandedRow").GetTextPr().SetBold(true);
table.GetRow(0).GetCell(0).GetContent().GetElement(0).AddText("Normal");
table.GetRow(0).GetCell(1).GetContent().GetElement(0).AddText("Normal");
table.GetRow(1).GetCell(0).GetContent().GetElement(0).AddText("Bold");
table.GetRow(1).GetCell(1).GetContent().GetElement(0).AddText("Bold");
table.GetRow(2).GetCell(0).GetContent().GetElement(0).AddText("Bold");
table.GetRow(2).GetCell(1).GetContent().GetElement(0).AddText("Bold");
table.GetRow(3).GetCell(0).GetContent().GetElement(0).AddText("Normal");
table.GetRow(3).GetCell(1).GetContent().GetElement(0).AddText("Normal");
doc.Push(table);