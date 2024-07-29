// This example shows how to get the quote text of the comment.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
var sQuoteText = aComments[0].GetQuoteText();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Comment quote text: " + sQuoteText);
oDocument.Push(oParagraph);