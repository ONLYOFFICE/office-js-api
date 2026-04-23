// Type text directly into a content control in a document.

// How do I fill a content control with text in a document?

// Place a block content control on the page and write text inside it in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);