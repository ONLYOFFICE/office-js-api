// This example shows how to get an element by its position in the document content.

// How to get element knowing its index.

// Get the first paragraph and add text to it.

let doc = Api.GetDocument();
let section = doc.GetFinalSection();
let docContent = section.GetHeader("default", true);
let paragraph = docContent.GetElement(0);
paragraph.AddText("This is the text in the default header");