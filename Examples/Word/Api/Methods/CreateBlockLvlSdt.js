// Add a block level container to the document.

// How to create a block text content control, add a text to it, and add this container to the document.

// Create a block level container and add it to the document class.

let doc = Api.GetDocument();
var blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);