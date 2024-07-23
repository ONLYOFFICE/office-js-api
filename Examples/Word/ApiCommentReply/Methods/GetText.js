// This example shows how to get the comment reply text.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
aComments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
var oCommentReply = aComments[0].GetReply(0);
var sText = oCommentReply.GetText();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Comment reply text: " + sText);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetText.docx");
builder.CloseFile();