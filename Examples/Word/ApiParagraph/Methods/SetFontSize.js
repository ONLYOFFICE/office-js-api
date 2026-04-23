// Set the text size for all characters in a paragraph in a document.

// How do I make the text in a paragraph larger or smaller in a document?

// Resize paragraph text to stand out or fit a specific layout requirement in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample paragraph with the font size set to 24 points.");
paragraph.SetFontSize(48);