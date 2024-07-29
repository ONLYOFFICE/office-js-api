// This example shows how to get the comment ID.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
var sId = aComments[0].GetId();
var oComment = oDocument.GetCommentById(sId);
var sAutor = oComment.GetAutorName();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Comment author name: " + sAutor);
oDocument.Push(oParagraph);