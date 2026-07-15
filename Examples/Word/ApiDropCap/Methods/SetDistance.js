// Set the distance between a drop cap and the paragraph text in a document.

// How do I add spacing between a drop cap and the surrounding paragraph text in a document?

// Increase the horizontal gap between the decorative initial letter and the paragraph text in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Once upon a time, there was a paragraph that started with a large decorative letter.');
doc.Push(paragraph);
const dropCap = paragraph.SetDropCap('drop');
dropCap.SetDistance(72);
