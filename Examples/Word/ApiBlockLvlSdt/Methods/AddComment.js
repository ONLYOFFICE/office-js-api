// Add a comment to the block content control in a document.

// Create a block content control in the document class, add a paragraph with a text to it, and add a comment to the content control.

// How to add a comment written by John Smith to the block-level content control object in a document.

// John Smith comments on the block content control in the current document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.AddComment("comment", "John Smith");