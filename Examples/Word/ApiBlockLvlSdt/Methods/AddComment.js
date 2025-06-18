// This example adds a comment to the block content control.

// Creates a block content control in the ApiDocument class, adds a paragraph with a text to it, and adds a comment to the content control.

// How to add a comment written by John Smith to the ApiBlockLvlSdt object.

// John Smith comments on the block content control in the current document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.AddComment("comment", "John Smith");