// This example shows how to get the alias attribute for the container.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with alias '№1'.");
oBlockLvlSdt.SetAlias("№1");
oDocument.AddElement(0, oBlockLvlSdt);
var oAlias = oBlockLvlSdt.GetAlias();
var oParagraph = oDocument.GetElement(1);
oParagraph.AddText("Alias: " + oAlias);
builder.SaveFile("docx", "GetAlias.docx");
builder.CloseFile();