// Add a paragraph to a content control in a document.

// How do I add a paragraph to a content control in a document?

// Insert new text into a content control by appending a paragraph to it in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a block text content control.");
blockLvlSdt.Push(paragraph);
doc.AddElement(0, blockLvlSdt);