// This example shows how to get all comments from the current document.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
var sType = aComments[0].GetClassType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Class type: " + sType);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetAllComments.docx");
builder.CloseFile();