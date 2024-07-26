// This example sets all 4 font slots with the specified font family.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text. ");
oParagraph.AddText("This is a text run with the font family set to 'Comic Sans MS'.");
var oRange = oDocument.GetRange(22, 71);
oRange.SetFontFamily("Consolas");
builder.SaveFile("docx", "SetFontFamily.docx");
builder.CloseFile();