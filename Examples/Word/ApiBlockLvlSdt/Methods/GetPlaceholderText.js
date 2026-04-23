// Read the placeholder text shown inside an empty content control in a document.

// How do I get the placeholder text of a content control in a document?

// Set a placeholder on a content control and then show that placeholder text as a paragraph in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.SetPlaceholderText("Name");
let text = blockLvlSdt.GetPlaceholderText();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Placeholder text: " + text);
doc.Push(paragraph);