// Get the current document in a document.

// Return the current document object and add a paragraph to it.

// Create the paragraph object, add a text to it, and insert this object into the document object.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a new paragraph");
doc.Push(paragraph);