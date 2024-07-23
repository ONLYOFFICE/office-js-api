// This example specifies that all the small letter characters in this text run are formatted for display only as their capital letter character equivalents which are two points smaller than the actual font size specified for this text.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.SetSmallCaps(true);
oRun.AddText("This is a text run with the font set to small capitalized letters.");
oParagraph.AddElement(oRun);
builder.SaveFile("docx", "SetSmallCaps.docx");
builder.CloseFile();