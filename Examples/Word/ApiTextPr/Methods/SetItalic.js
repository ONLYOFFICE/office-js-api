// Set the italic property to the text character in a document.

// How to make a text italic in a document.

// Create a text run object, change its properties by making it italic in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetItalic(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the font set to italicized letters using the text properties.");