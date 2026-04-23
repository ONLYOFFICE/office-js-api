// Add a new paragraph with text to the current document.

// How do I access the open document and add content to it in a document?

// Insert a paragraph into the active document using a reference to it in a document.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a new paragraph");
doc.Push(paragraph);