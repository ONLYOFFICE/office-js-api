// This example creates a paragraph copy.

// How to add a duplicate paragraph.

// Copy a paragraph.

let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
paragraph1.AddText("This is just a sample text that was copied.");
let paragraph2 = paragraph1.Copy();
doc.Push(paragraph2);