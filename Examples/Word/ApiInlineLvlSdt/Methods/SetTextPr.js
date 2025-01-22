// This example applies text settings to the content of the content control.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("This is an inline text content control with the font size set to 30 and the font weight set to bold.");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
inlineLvlSdt.SetTextPr(textPr);