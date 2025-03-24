// This example inserts an array of elements into the current position of the document.

// How to insert the paragraph to the document.

// Create a paragraph and show it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a sample text. It was inserted here.");
doc.InsertContent([paragraph]);