// This example pushes a paragraph to actually add it to the container.

// Creates a block content control and pushes a paragraph to it.

// How to add a document element (paragraph, table, or block content control) to the ApiBlockLvlSdt object.

// Creates the ApiParagraph object, adds a text to it, and pushes it to the block container.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a block text content control.");
blockLvlSdt.Push(paragraph);
doc.AddElement(0, blockLvlSdt);