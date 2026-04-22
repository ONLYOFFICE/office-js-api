// Specify a number of columns which will comprise each table column band for this table style in a document.

// How to set column band size in a document.

// How to style a column band size in a document.

let doc = Api.GetDocument();
doc.RemoveAllElements();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 4);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.SetTableLook(true, true, true, true, true, true);
table.SetStyleColBandSize(2);
tableStyle.GetConditionalTableStyle("bandedColumn").GetTextPr().SetBold(true);
table.Cells[0][0].GetContent().AddText("Bold");
table.Cells[0][1].GetContent().AddText("Bold");
table.Cells[0][2].GetContent().AddText("Normal");
table.Cells[0][3].GetContent().AddText("Normal");
table.Cells[1][0].GetContent().AddText("Bold");
table.Cells[1][1].GetContent().AddText("Bold");
table.Cells[1][2].GetContent().AddText("Normal");
table.Cells[1][3].GetContent().AddText("Normal");
doc.Push(table);