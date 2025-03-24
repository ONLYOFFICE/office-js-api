// This example creates a new paragraph and inserts it into the document.

// Creates the ApiParagraph object, adds a text to it, and inserts it into the ApiDocument class.

// How to create a paragraph with the specified text and add it to the current document.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a new paragraph");
doc.Push(paragraph);