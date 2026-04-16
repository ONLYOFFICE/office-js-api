// Add some text to the paragraph in a document.

// How to insert the text to the paragraph in a document.

// Add the text and display the result in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text. Nothing special.");