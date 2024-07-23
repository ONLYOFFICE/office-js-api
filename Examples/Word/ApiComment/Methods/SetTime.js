// This example sets the timestamp of the comment creation in the current time zone format.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
aComments[0].SetTime("1672247153658");
var sTime = aComments[0].GetTime();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Comment creation timestamp: " + sTime);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetTime.docx");
builder.CloseFile();