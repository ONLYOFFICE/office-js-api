// This example sets the font size to the characters of the current text run.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetFontSize(30);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("A sample text with the font size set to 15 points using the text properties.");
builder.SaveFile("docx", "SetFontSize.docx");
builder.CloseFile();