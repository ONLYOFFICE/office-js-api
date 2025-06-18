// This example wraps the paragraph object with a rich text content control.

// How to insert the paragraph object into the another element.

// Add paragraph to the content control.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph inserted into the content control.");
let blockLvlSdt = paragraph.InsertInContentControl(1);
doc.AddElement(0, blockLvlSdt);