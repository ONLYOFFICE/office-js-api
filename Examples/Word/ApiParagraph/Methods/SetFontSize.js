// Set the font size to the characters of the paragraph in a document.

// How to set font size to the text in a document.

// Create a new paragraph and resize its font in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample paragraph with the font size set to 24 points.");
paragraph.SetFontSize(48);