// This example sets the border which will be displayed at the bottom of the table.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We add the bottom 4 point black border:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTablePr = oTableStyle.GetTablePr();
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTablePr.SetTableBorderBottom("single", 32, 0, 51, 51, 51);
oTable.SetTableLook(true, true, true, true, true, true);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
builder.SaveFile("docx", "SetTableBorderBottom.docx");
builder.CloseFile();