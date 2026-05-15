// Replace all content in a document content object with plain text in a document.

// How do I overwrite everything inside a document content object in a document?

// Clear a content control and fill it with a single sentence, preserving the original formatting in a document.

const doc = Api.GetDocument();
const blockLvlSdt = Api.CreateBlockLvlSdt();
doc.Push(blockLvlSdt);

const content = blockLvlSdt.GetContent();
content.GetElement(0).AddText("Original text inside the content control.");
content.SetText("Replaced text inside the content control.");

const para = Api.CreateParagraph();
para.AddText("Content after SetText: " + content.GetText());
doc.Push(para);
