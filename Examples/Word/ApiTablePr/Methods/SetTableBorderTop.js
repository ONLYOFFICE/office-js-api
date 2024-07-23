// This example sets the border which will be displayed at the top of the table.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We add the top 4 point black border:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTablePr = oTableStyle.GetTablePr();
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTablePr.SetTableBorderTop("single", 32, 0, 51, 51, 51);
oTable.SetTableLook(true, true, true, true, false, false);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
builder.SaveFile("docx", "SetTableBorderTop.docx");
builder.CloseFile();