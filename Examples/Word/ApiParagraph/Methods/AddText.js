// This example adds some text to the paragraph.

// How to insert the text to the paragraph.

// Add paragraph text.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text. Nothing special.");