// This example shows how to add a block level conteiner into the document.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
oDocument.AddElement(0, oBlockLvlSdt);
builder.SaveFile("docx", "CreateBlockLvlSdt.docx");
builder.CloseFile();