// This example sets a style to the table.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We create a table and apply one of the existing styles to it:");
var oTableStyle = oDocument.GetStyle("Bordered");
var oTable = Api.CreateTable(2, 2);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
builder.SaveFile("docx", "SetStyle.docx");
builder.CloseFile();