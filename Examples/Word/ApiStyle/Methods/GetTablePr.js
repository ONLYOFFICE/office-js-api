// This example shows how to get the table properties of the style.

// How to get table properties and set its cells margins.

// Update the table cell margin sizes.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
let tablePr = tableStyle.GetTablePr();
tablePr.SetTableInd(0);
tablePr.SetTableCellMarginTop(720);
tablePr.SetTableCellMarginLeft(120);
tablePr.SetTableCellMarginRight(120);
tablePr.SetTableCellMarginBottom(0);
doc.Push(table);
table.SetStyle(tableStyle);
table.SetTableLook(true, true, true, true, true, true);
tableStyle.GetConditionalTableStyle("topLeftCell").GetTableCellPr().SetShd("clear", 255, 111, 61);
tableStyle.GetConditionalTableStyle("topRightCell").GetTableCellPr().SetShd("clear", 51, 51, 51);
tableStyle.GetConditionalTableStyle("bottomLeftCell").GetTableCellPr().SetShd("clear", 128, 128, 128);
tableStyle.GetConditionalTableStyle("bottomRightCell").GetTableCellPr().SetShd("clear", 255, 213, 191);