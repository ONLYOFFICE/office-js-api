// Create a copy of a block level content control in a document.

// Create a block content control in the current document, copy it, and add a copy to the same document.

// How to create a copy of the block-level content control object in a document.

// Create a block level container in the document class, add a text to it, and copy it into the same document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = blockLvlSdt.GetContent().GetElement(0);
paragraph.AddText("This is an block level content control.");
doc.Push(blockLvlSdt);
doc.Push(blockLvlSdt.Copy());