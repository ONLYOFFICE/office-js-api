// This example sets the table title.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetTableTitle("Table 1");
oTable.SetStyle(oTableStyle);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Table title: " + oTable.GetTableTitle());
oDocument.Push(oTable);
builder.SaveFile("docx", "SetTableTitle.docx");
builder.CloseFile();