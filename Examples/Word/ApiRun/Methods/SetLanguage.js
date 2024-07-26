// This example specifies the languages which will be used to check spelling and grammar (if requested) when processing the contents of this text run.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.SetLanguage("en-CA");
oRun.AddText("This is a text run with the text language set to English (Canada).");
oParagraph.AddElement(oRun);
builder.SaveFile("docx", "SetLanguage.docx");
builder.CloseFile();