// Insert a paragraph into a content control at a specific position in a document.

// How do I place a paragraph inside a content control in a document?

// Populate a content control with a text paragraph and add the whole block to the page in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a block text content control.");
blockLvlSdt.AddElement(paragraph, 0);
doc.AddElement(0, blockLvlSdt);