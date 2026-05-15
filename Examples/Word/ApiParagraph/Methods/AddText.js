// Add text to an existing paragraph in a document.

// How do I insert a text string into a paragraph in a document?

// Place custom text inside a paragraph to build document content in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text. Nothing special.");