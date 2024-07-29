// This example shows how to get the table properties of the style.
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
var oTable = Api.CreateTable(2, 2);
oTable.SetWidth("percent", 100);
var oTablePr = oTableStyle.GetTablePr();
oTablePr.SetTableInd(0);
oTablePr.SetTableCellMarginTop(720);
oTablePr.SetTableCellMarginLeft(120);
oTablePr.SetTableCellMarginRight(120);
oTablePr.SetTableCellMarginBottom(0);
oDocument.Push(oTable);
oTable.SetStyle(oTableStyle);
oTable.SetTableLook(true, true, true, true, true, true);
oTableStyle.GetConditionalTableStyle("topLeftCell").GetTableCellPr().SetShd("clear", 255, 111, 61);
oTableStyle.GetConditionalTableStyle("topRightCell").GetTableCellPr().SetShd("clear", 51, 51, 51);
oTableStyle.GetConditionalTableStyle("bottomLeftCell").GetTableCellPr().SetShd("clear", 128, 128, 128);
oTableStyle.GetConditionalTableStyle("bottomRightCell").GetTableCellPr().SetShd("clear", 255, 213, 191);