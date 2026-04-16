// Get the internal ID of a paragraph in a document.

// How to get the internal id for a paragraph in a document?

// Get the internal id and display the result in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
paragraph.AddText('This is a sample paragraph.');

const internalId = paragraph.GetInternalId();
const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('First paragraph internal ID: ' + internalId);
doc.Push(paragraph2);