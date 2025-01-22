// This example shows how to get the table row properties of the current style.
let document = Api.GetDocument();
let tableStyle = document.CreateStyle("CustomTableStyle", "table");
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
document.Push(table);
table.SetStyle(tableStyle);
table.SetTableLook(true, true, true, true, false, false);
tableStyle.GetTableRowPr().SetHeight("atLeast", 1440);
tableStyle.GetConditionalTableStyle("topLeftCell").GetTableCellPr().SetShd("clear", 255, 111, 61);
tableStyle.GetConditionalTableStyle("topRightCell").GetTableCellPr().SetShd("clear", 51, 51, 51);
tableStyle.GetConditionalTableStyle("bottomLeftCell").GetTableCellPr().SetShd("clear", 128, 128, 128);
tableStyle.GetConditionalTableStyle("bottomRightCell").GetTableCellPr().SetShd("clear", 255, 213, 191);