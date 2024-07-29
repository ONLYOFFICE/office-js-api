// This example sets the comment reply author's name.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
aComments[0].AddReply("reply1", "John Smith", "uid-1", 0);
var oCommentReply = aComments[0].GetReply(0);
oCommentReply.SetAuthorName("Mark Potato");
var sAuthorName = oCommentReply.GetAuthorName();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Comment reply author name: " + sAuthorName);
oDocument.Push(oParagraph);