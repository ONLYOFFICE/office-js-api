// This example shows how to get the paragraph text properties.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a sample text with the font size set to 30 and the font weight set to bold.");
var oTextPr = Api.CreateTextPr();
oTextPr.SetFontSize(32);
oTextPr.SetBold(true);
oParagraph.SetTextPr(oTextPr);
oTextPr = oParagraph.GetTextPr();
oTextPr.SetItalic(true);
oParagraph.SetTextPr(oTextPr);
builder.SaveFile("docx", "GetTextPr.docx");
builder.CloseFile();