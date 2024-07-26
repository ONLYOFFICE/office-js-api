// This example shows how to get the last element of the paragraph which is not empty.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun_1 = Api.CreateRun();
oRun_1.AddText("This is an Run with text. ");
oParagraph.Push(oRun_1);
var oRun_2 = Api.CreateRun();
oRun_2.AddText("And this is the last Run in the paragraph.");
oParagraph.Push(oRun_2);
var oLastRun = oParagraph.Last();
oLastRun.SetBold(true);
builder.SaveFile("docx", "Last.docx");
builder.CloseFile();