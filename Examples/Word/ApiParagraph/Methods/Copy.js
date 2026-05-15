// Duplicate a paragraph and append the copy to the end of a document.

// How do I copy a paragraph and place it elsewhere in a document?

// Reuse existing paragraph content without retyping it in a document.

let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
paragraph1.AddText("This is just a sample text that was copied.");
let paragraph2 = paragraph1.Copy();
doc.Push(paragraph2);