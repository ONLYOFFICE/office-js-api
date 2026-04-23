// Group multiple adjacent rows together into a single alternating band in a document.

// How do I make the striped row pattern span more than one row in a document?

// Widen the repeating row highlight bands applied by a table style in a document.

let doc = Api.GetDocument();
doc.RemoveAllElements();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(4, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let tablePr = tableStyle.GetTablePr();
table.SetTableLook(true, true, true, true, true, true);
tablePr.SetStyleRowBandSize(2);
tableStyle.GetConditionalTableStyle("bandedRow").GetTextPr().SetBold(true);
table.Cells[0][0].GetContent().AddText("Normal");
table.Cells[0][1].GetContent().AddText("Normal");
table.Cells[1][0].GetContent().AddText("Bold");
table.Cells[1][1].GetContent().AddText("Bold");
table.Cells[2][0].GetContent().AddText("Bold");
table.Cells[2][1].GetContent().AddText("Bold");
table.Cells[3][0].GetContent().AddText("Normal");
table.Cells[3][1].GetContent().AddText("Normal");
doc.Push(table);