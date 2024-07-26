// This example sets the text fill to the current text run.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oRun.SetTextFill(oFill);
oRun.AddText("This is a text run with the black text.");
oParagraph.AddElement(oRun);
builder.SaveFile("docx", "SetTextFill.docx");
builder.CloseFile();