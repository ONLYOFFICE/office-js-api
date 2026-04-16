// Get the current document in a document.

// Return the current document object and add a paragraph to it.

// How to add a paragraph to the current document.

// Create the paragraph object, add a text to it, and insert this object into the document object.

// How to get the current document to work with it.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a new paragraph");
doc.Push(paragraph);