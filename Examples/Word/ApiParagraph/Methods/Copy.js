// Create a paragraph copy in a document.

// How to add a duplicate paragraph in a document.

// Copy a paragraph using the paragraph API in a document.

let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
paragraph1.AddText("This is just a sample text that was copied.");
let paragraph2 = paragraph1.Copy();
doc.Push(paragraph2);