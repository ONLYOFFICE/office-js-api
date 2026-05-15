// Retrieve the unique internal identifier assigned to a paragraph in a document.

// How do I obtain the internal ID of a paragraph in a document?

// Display the internal ID alongside the paragraph text to identify it in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
paragraph.AddText('This is a sample paragraph.');

const internalId = paragraph.GetInternalId();
const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('First paragraph internal ID: ' + internalId);
doc.Push(paragraph2);