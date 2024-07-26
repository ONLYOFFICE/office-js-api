// This example shows how to get the table cell properties of the style.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
var oTable = Api.CreateTable(2, 3);
oTable.SetWidth("percent", 100);
oDocument.Push(oTable);
oTable.SetStyle(oTableStyle);
oTable.SetTableLook(true, true, true, true, true, true);
oTableStyle.GetConditionalTableStyle("topLeftCell").GetTableCellPr().SetShd("clear", 255, 111, 61);
oTableStyle.GetConditionalTableStyle("topRightCell").GetTableCellPr().SetShd("clear", 51, 51, 51);
oTableStyle.GetConditionalTableStyle("bottomLeftCell").GetTableCellPr().SetShd("clear", 128, 128, 128);
oTableStyle.GetConditionalTableStyle("bottomRightCell").GetTableCellPr().SetShd("clear", 255, 213, 191);
builder.SaveFile("docx", "GetTableCellPr.docx");
builder.CloseFile();