// This example sets the text color to the current text run.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is a text run with the font color set to orange.");
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oRun.SetFill(oFill);
oParagraph.AddElement(oRun);
builder.SaveFile("docx", "SetFill.docx");
builder.CloseFile();