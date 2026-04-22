// Specify a number of rows which will comprise each table row band for this table style in a document.

// How to set row band size in a document.

// How to style a row band size in a document.

let doc = Api.GetDocument();
doc.RemoveAllElements();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(4, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.SetTableLook(true, true, true, true, true, true);
table.SetStyleRowBandSize(2);
tableStyle.GetConditionalTableStyle("bandedRow").GetTextPr().SetBold(true);
table.Cells[0][0].AddText("Normal");
table.Cells[0][1].AddText("Normal");
table.Cells[1][0].AddText("Bold");
table.Cells[1][1].AddText("Bold");
table.Cells[2][0].AddText("Bold");
table.Cells[2][1].AddText("Bold");
table.Cells[3][0].AddText("Normal");
table.Cells[3][1].AddText("Normal");
doc.Push(table);