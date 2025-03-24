// This example shows how to get a content control that contains the paragraph.

// How to get the parent control of the paragraph.

// Make bold the parent element.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
doc.Push(blockLvlSdt, 0);
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph added to the block text content control.");
blockLvlSdt.AddElement(paragraph, 0);
let parentBlockLvlSdt = paragraph.GetParentContentControl();
parentBlockLvlSdt.GetRange(0, 3).SetBold(true);