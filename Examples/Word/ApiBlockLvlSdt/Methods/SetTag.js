// Set a tag attribute for a container in a document.

// Create a block content control and set a tag to it in a document.

// How to add a tag to the block-level content control object in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with a tag set to it.");
blockLvlSdt.SetTag("This is a tag.");
doc.AddElement(0, blockLvlSdt);