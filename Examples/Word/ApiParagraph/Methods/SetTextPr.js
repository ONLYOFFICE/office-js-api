// This example sets the paragraph text properties.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a sample text with the font size set to 30 and the font weight set to bold.");
var oTextPr = Api.CreateTextPr();
oTextPr.SetFontSize(30);
oTextPr.SetBold(true);
oParagraph.SetTextPr(oTextPr);
builder.SaveFile("docx", "SetTextPr.docx");
builder.CloseFile();