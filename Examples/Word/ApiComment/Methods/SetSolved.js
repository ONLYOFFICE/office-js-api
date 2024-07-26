// This example marks a comment as solved.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
aComments[0].SetSolved(true);
var bSolved = aComments[0].IsSolved();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The comment is solved: " + bSolved);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetSolved.docx");
builder.CloseFile();