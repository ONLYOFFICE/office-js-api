// Set the italic property to the text character in a document.

// How to make text italic in a document.

// Create a paragraph and make its text style italic in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a text run with the font set to italicized letters.");
paragraph.SetItalic(true);