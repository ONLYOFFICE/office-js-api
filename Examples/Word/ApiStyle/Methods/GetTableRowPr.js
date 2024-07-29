// This example shows how to get the table row properties of the current style.
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
var oTable = Api.CreateTable(2, 2);
oTable.SetWidth("percent", 100);
oDocument.Push(oTable);
oTable.SetStyle(oTableStyle);
oTable.SetTableLook(true, true, true, true, false, false);
oTableStyle.GetTableRowPr().SetHeight("atLeast", 1440);
oTableStyle.GetConditionalTableStyle("topLeftCell").GetTableCellPr().SetShd("clear", 255, 111, 61);
oTableStyle.GetConditionalTableStyle("topRightCell").GetTableCellPr().SetShd("clear", 51, 51, 51);
oTableStyle.GetConditionalTableStyle("bottomLeftCell").GetTableCellPr().SetShd("clear", 128, 128, 128);
oTableStyle.GetConditionalTableStyle("bottomRightCell").GetTableCellPr().SetShd("clear", 255, 213, 191);