// Set the bold property to the text character in a document.

// How to make a text bold in a document.

// Get a font object of characters and make it bold in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetBold(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the font weight set to bold using the text properties.");