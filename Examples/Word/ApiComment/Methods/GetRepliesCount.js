// This example shows how to get a number of the comment replies.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
aComments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
var nReplies = aComments[0].GetRepliesCount();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Number of comment replies: " + nReplies);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetRepliesCount.docx");
builder.CloseFile();