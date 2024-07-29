// This example sets the timestamp of the comment creation in UTC format.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
aComments[0].SetTimeUTC("1672247153658");
var sTimeUTC = aComments[0].GetTimeUTC();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The timestamp of comment creation in UTC format: " + sTimeUTC);
oDocument.Push(oParagraph);