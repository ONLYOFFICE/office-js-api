// This example adds a paragraph to the container.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a block text content control.");
oBlockLvlSdt.AddElement(oParagraph, 0);
oDocument.AddElement(0, oBlockLvlSdt);
builder.SaveFile("docx", "AddElement.docx");
builder.CloseFile();