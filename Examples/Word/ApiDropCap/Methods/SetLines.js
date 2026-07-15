// Set the number of lines a drop cap spans in a document.

// How do I control how many lines the drop cap of a paragraph drops down in a document?

// Resize the decorative initial letter so that it occupies the specified number of text lines in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Once upon a time, there was a paragraph that started with a large decorative letter.');
doc.Push(paragraph);
const dropCap = paragraph.SetDropCap('drop');
dropCap.SetLines(4);
