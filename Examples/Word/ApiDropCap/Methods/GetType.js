// Read the type of a drop cap in a document.

// How do I check whether a drop cap is placed in the text or in the margin in a document?

// Retrieve the current drop cap type from a paragraph drop cap in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Once upon a time, there was a paragraph that started with a large decorative letter.');
doc.Push(paragraph);
const dropCap = paragraph.SetDropCap('margin');
const type = dropCap.GetType();
const result = Api.CreateParagraph();
result.AddText('The drop cap type: ' + type);
doc.Push(result);
