// Retrieve the content control that wraps a given paragraph in a document.

// How do I find the content control that contains a paragraph in a document?

// Bold the first words inside a content control by navigating from its child paragraph in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
doc.Push(blockLvlSdt, 0);
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph added to the block text content control.");
blockLvlSdt.AddElement(paragraph, 0);
let parentBlockLvlSdt = paragraph.GetParentContentControl();
parentBlockLvlSdt.GetRange(0, 3).SetBold(true);