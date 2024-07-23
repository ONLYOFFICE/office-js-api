// This example shows how to get the comment author's name.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
var AuthorName = aComments[0].GetAuthorName();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Author name: " + AuthorName);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetAuthorName.docx");
builder.CloseFile();