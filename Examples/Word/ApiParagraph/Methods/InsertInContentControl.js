// Wrap a paragraph inside a rich-text content control in a document.

// How do I place a paragraph into a content control in a document?

// Convert a standalone paragraph into a protected content control block in a document.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph inserted into the content control.");
let blockLvlSdt = paragraph.InsertInContentControl(1);
doc.AddElement(0, blockLvlSdt);