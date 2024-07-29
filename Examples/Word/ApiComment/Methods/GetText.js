// This example shows how to get the comment text.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
var sText = aComments[0].GetText();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Comment text: " + sText);
oDocument.Push(oParagraph);