// This example removes the specified comment replies.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
aComments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
aComments[0].RemoveReplies();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The comment replies were removed");
oDocument.Push(oParagraph);