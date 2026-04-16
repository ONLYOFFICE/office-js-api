// Delete a content control and its content in a document.

// Create the block-level content control object in the current document, add a text to it, and delete it and its content from the document.

// How to delete the block level container from the document class.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.Delete(false);