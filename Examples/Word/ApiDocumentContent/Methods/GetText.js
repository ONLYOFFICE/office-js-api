// Extract all text from a document content container as a plain string in a document.

// How do I read the full text stored inside a document content object in a document?

// Verify the text inside a content control by reading it back as a single string.

const doc = Api.GetDocument();

const blockLvlSdt = Api.CreateBlockLvlSdt();
doc.Push(blockLvlSdt);

const content = blockLvlSdt.GetContent();
content.GetElement(0).AddText("This is a block text content control.");

const para = Api.CreateParagraph();
para.AddText("This text from DocContent element: " + content.GetText());
doc.Push(para);