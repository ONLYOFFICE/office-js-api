// This example applies text settings to the content of the content control.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oInlineLvlSdt.AddText("This is an inline text content control with the font size set to 30 and the font weight set to bold.");
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
var oTextPr = Api.CreateTextPr();
oTextPr.SetFontSize(30);
oTextPr.SetBold(true);
oInlineLvlSdt.SetTextPr(oTextPr);
builder.SaveFile("docx", "SetTextPr.docx");
builder.CloseFile();