// This example applies text settings to the content of the content control.
let document = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with the font size set to 30 and the font weight set to bold.");
document.AddElement(0, blockLvlSdt);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
blockLvlSdt.SetTextPr(textPr);