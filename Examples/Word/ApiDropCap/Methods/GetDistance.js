// Read the distance between a drop cap and the paragraph text in a document.

// How do I find out the gap between a drop cap and the paragraph text in a document?

// Retrieve the horizontal distance between the drop cap and the paragraph text in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Once upon a time, there was a paragraph that started with a large decorative letter.');
doc.Push(paragraph);
const dropCap = paragraph.SetDropCap('drop');
dropCap.SetDistance(72);
const distance = dropCap.GetDistance();
const result = Api.CreateParagraph();
result.AddText('The distance between the drop cap and the text: ' + distance + ' twips');
doc.Push(result);
