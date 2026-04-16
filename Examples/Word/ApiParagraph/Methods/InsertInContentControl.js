// Wrap the paragraph object with a rich text content control in a document.

// How to insert the paragraph object into the another element in a document.

// Add paragraph to the content control in a document.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph inserted into the content control.");
let blockLvlSdt = paragraph.InsertInContentControl(1);
doc.AddElement(0, blockLvlSdt);