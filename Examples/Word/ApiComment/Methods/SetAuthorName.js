// This example sets the comment author's name.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
aComments[0].SetAuthorName("Mark Potato");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The comment author's name was changed");
oDocument.Push(oParagraph);