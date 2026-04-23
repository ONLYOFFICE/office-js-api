// Access the inner content of a content control to add text to it in a document.

// How do I add text to the inside of a content control in a document?

// Write additional text into an existing content control by reading its contents in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a block text content control.");
blockLvlSdt.AddElement(paragraph, 0);
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.GetContent().GetElement(1).AddText("This is a content of the container.");