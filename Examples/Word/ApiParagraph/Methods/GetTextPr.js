// This example shows how to get the paragraph text properties.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is a sample text with the font size set to 30 and the font weight set to bold.");
let textPr = Api.CreateTextPr();
textPr.SetFontSize(32);
textPr.SetBold(true);
paragraph.SetTextPr(textPr);
textPr = paragraph.GetTextPr();
textPr.SetItalic(true);
paragraph.SetTextPr(textPr);