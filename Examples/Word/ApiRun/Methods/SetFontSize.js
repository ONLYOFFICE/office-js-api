// This example sets the font size to the characters of the current text run.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.SetFontSize(30);
oRun.AddText("This is a text run with the font size set to 15 points (30 half-points).");
oParagraph.AddElement(oRun);
builder.SaveFile("docx", "SetFontSize.docx");
builder.CloseFile();