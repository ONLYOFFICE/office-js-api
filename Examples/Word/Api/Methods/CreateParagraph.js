// Create a new paragraph and insert it into the document.

// Create the paragraph object, add a text to it, and insert it into the document class.

// How to create a paragraph with the specified text and add it to the current document.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a new paragraph");
doc.Push(paragraph);