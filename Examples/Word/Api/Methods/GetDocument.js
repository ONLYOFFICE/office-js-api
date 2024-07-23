// This example shows how to get a document.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a new paragraph");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetDocument.docx");
builder.CloseFile();