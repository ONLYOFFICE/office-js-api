// This example applies text settings to the content of the content control.
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with the font size set to 30 and the font weight set to bold.");
oDocument.AddElement(0, oBlockLvlSdt);
var oTextPr = Api.CreateTextPr();
oTextPr.SetFontSize(30);
oTextPr.SetBold(true);
oBlockLvlSdt.SetTextPr(oTextPr);