// Add a background highlight color to paragraph text in a document.

// How do I highlight the text of a paragraph with a color in a document?

// Draw attention to paragraph content by painting its background with a chosen color in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text highlighted with light gray color.");
paragraph.SetHighlight("lightGray");