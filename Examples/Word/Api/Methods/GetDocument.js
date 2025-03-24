// This example shows how to get the current document.

// Returns the current document object and adds a paragraph to it.

// How to add a paragraph to the current document.

// Creates the ApiParagraph object, adds a text to it, and inserts this object into the ApiDocument object.

// How to get the current document to work with it.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a new paragraph");
doc.Push(paragraph);