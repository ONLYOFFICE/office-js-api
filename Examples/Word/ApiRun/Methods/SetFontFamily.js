// This example sets all 4 font slots with the specified font family.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.SetFontFamily("Calibri Light");
oRun.AddText("This is a text run with the font family set to 'Calibri Light'.");
oParagraph.AddElement(oRun);
builder.SaveFile("docx", "SetFontFamily.docx");
builder.CloseFile();