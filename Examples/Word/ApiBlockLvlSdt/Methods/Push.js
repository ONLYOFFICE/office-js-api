// This example pushes a paragraph to actually add it to the container.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a block text content control.");
oBlockLvlSdt.Push(oParagraph);
oDocument.AddElement(0, oBlockLvlSdt);
builder.SaveFile("docx", "Push.docx");
builder.CloseFile();