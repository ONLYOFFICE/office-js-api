// Turn the first letter of a paragraph into a drop cap in a document.

// How do I make the first letter of a paragraph a large drop cap in a document?

// Split the first letter into a decorative initial and adjust its size through the returned drop cap object.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Once upon a time, there was a paragraph that started with a large decorative letter.');
doc.Push(paragraph);
const dropCap = paragraph.SetDropCap('drop');
dropCap.SetLinesToDrop(4);
