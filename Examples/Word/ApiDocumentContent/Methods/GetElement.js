// Get an element by its position in the document content.

// How to get element knowing its index in a document.

// Get the first paragraph and add text to it in a document.

let doc = Api.GetDocument();
let section = doc.GetFinalSection();
let docContent = section.GetHeader("default", true);
let paragraph = docContent.GetElement(0);
paragraph.AddText("This is the text in the default header");