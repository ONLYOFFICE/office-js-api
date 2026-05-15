// Add a new paragraph with text to the end of a document.

// How do I create a blank paragraph, fill it with text, and append it to a document?

// Build a paragraph from scratch and place it at the bottom of a document.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a new paragraph");
doc.Push(paragraph);