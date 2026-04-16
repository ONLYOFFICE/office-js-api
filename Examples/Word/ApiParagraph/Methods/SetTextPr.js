// Set the paragraph text properties in a document.

// Add text properties to the paragraph in a document.

// Make paragraph text bold and bigger in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a sample text with the font size set to 30 and the font weight set to bold.");
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
paragraph.SetTextPr(textPr);