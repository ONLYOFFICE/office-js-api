// This example shows how to get a type of the current style.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.GetStyle("Bordered");
oTableStyle.SetName("My Custom Style");
var oTable = Api.CreateTable(2, 2);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
var oTableStyleType = oTableStyle.GetType();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Style type = " + oTableStyleType);
builder.SaveFile("docx", "GetType.docx");
builder.CloseFile();