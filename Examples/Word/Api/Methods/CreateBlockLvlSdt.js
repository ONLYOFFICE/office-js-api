// This example shows how to add a block level container to the document.

// How to create a block text content control, add a text to it, and add this container to the document.

// Creates a block level container and adds it to the ApiDocument class.

let doc = Api.GetDocument();
var blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);