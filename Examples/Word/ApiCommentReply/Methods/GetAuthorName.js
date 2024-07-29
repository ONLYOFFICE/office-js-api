// This example shows how to get the comment reply author's name.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
aComments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
var oCommentReply = aComments[0].GetReply(0);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("First comment reply's author: " + oCommentReply.GetAuthorName());
oDocument.Push(oParagraph);