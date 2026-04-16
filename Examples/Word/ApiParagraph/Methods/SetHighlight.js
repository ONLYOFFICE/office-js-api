// Set highlight color "lightGray" for the paragraph in a document.

// How to set highlight to the text in a document.

// Create a new paragraph and highlight it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text highlighted with light gray color.");
paragraph.SetHighlight("lightGray");