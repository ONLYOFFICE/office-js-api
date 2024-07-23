// This example shows how to get the content of the container.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a block text content control.");
oBlockLvlSdt.AddElement(oParagraph, 0);
oDocument.AddElement(0, oBlockLvlSdt);
oBlockLvlSdt.GetContent().GetElement(1).AddText("This is a content of the container.");
builder.SaveFile("docx", "GetContent.docx");
builder.CloseFile();