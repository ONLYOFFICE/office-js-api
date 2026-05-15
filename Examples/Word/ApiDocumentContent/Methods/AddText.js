// Append text to the end of a document content object in a document.

// How do I add text to the last paragraph of a document content object in a document?

// Add a sentence to the end of a content control without replacing existing text in a document.

const doc = Api.GetDocument();
const blockLvlSdt = Api.CreateBlockLvlSdt();
doc.Push(blockLvlSdt);

const content = blockLvlSdt.GetContent();
content.GetElement(0).AddText("First sentence.");
content.AddText(" Appended sentence.");
