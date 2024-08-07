// This example sets the user ID to the comment author.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
aComments[0].SetUserId("uid-1");
var sUserId = aComments[0].GetUserId();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Comment user ID: " + sUserId);
oDocument.Push(oParagraph);