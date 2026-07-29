// Get the drop cap of a paragraph to adjust its settings in a document.

// How do I access an existing drop cap of a paragraph to change its settings in a document?

// Retrieve the drop cap object of a paragraph and change the number of lines it spans in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Once upon a time, there was a paragraph that started with a large decorative letter.');
doc.Push(paragraph);
paragraph.SetDropCap('drop');
const dropCap = paragraph.GetDropCap();
dropCap.SetLinesToDrop(2);
