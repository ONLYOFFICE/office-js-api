// Set how many columns form a repeating band pattern in a table style in a document.

// How do I control the width of alternating column groups in a table in a document?

// Group multiple columns together so they share the same banded formatting in a document.

let doc = Api.GetDocument();
doc.RemoveAllElements();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(4, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.SetTableLook(true, true, true, true, true, true);
table.SetStyleColBandSize(2);
tableStyle.GetConditionalTableStyle("bandedColumn").GetTextPr().SetBold(true);
table.GetRow(0).GetCell(0).GetContent().GetElement(0).AddText("Bold");
table.GetRow(0).GetCell(1).GetContent().GetElement(0).AddText("Bold");
table.GetRow(0).GetCell(2).GetContent().GetElement(0).AddText("Normal");
table.GetRow(0).GetCell(3).GetContent().GetElement(0).AddText("Normal");
table.GetRow(1).GetCell(0).GetContent().GetElement(0).AddText("Bold");
table.GetRow(1).GetCell(1).GetContent().GetElement(0).AddText("Bold");
table.GetRow(1).GetCell(2).GetContent().GetElement(0).AddText("Normal");
table.GetRow(1).GetCell(3).GetContent().GetElement(0).AddText("Normal");
doc.Push(table);