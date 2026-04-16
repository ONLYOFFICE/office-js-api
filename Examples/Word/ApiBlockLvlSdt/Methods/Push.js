// Pushes a paragraph to actually add it to the container in a document.

// Create a block content control and pushes a paragraph to it in a document.

// How to add a document element (paragraph, table, or block content control) to the block-level content control object.

// Create the paragraph object, add a text to it, and pushes it to the block container in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a block text content control.");
blockLvlSdt.Push(paragraph);
doc.AddElement(0, blockLvlSdt);