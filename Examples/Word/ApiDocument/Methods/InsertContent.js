// Insert a collection of elements at the current position in a document.

// How do I add multiple paragraphs at once to a document?

// Programmatically place pre-built content blocks into the document without appending them one by one.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a sample text. It was inserted here.");
doc.InsertContent([paragraph]);