// This example specifies the shading which shall be applied to the extents of the table.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We added an orange shading to the table:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTablePr = oTableStyle.GetTablePr();
var oTable = Api.CreateTable(3, 3);
oTablePr.SetShd("clear", 255, 111, 61, false);
oTable.SetTableLook(true, true, true, true, false, false);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
builder.SaveFile("docx", "SetShd.docx");
builder.CloseFile();