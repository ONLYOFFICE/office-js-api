// Adjust the font size applied to text in a document.

// How do I make text larger or smaller in a document?

// Control how big characters appear by setting a custom font size in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetFontSize(30);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the font size set to 15 points using the text properties.");