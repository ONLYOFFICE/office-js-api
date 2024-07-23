// This example inserts an array of elements into the current position of the document.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a sample text. It was inserted here.");
oDocument.InsertContent([oParagraph]);
builder.SaveFile("docx", "InsertContent.docx");
builder.CloseFile();