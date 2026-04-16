// Get the paragraph text properties in a document.

// How to get text properties of the paragraph object in a document.

// Get the paragraph text properties and display it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a sample text with the font size set to 30 and the font weight set to bold.");
let textPr = Api.CreateTextPr();
textPr.SetFontSize(32);
textPr.SetBold(true);
paragraph.SetTextPr(textPr);
textPr = paragraph.GetTextPr();
textPr.SetItalic(true);
paragraph.SetTextPr(textPr);