// Access the paragraph that holds the drop cap letter in a document.

// How do I format the drop cap letter itself, such as its color, in a document?

// Get the drop cap paragraph and colour its letter red in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Once upon a time, there was a paragraph that started with a large decorative letter.');
doc.Push(paragraph);
const dropCap = paragraph.SetDropCap('drop');
const letter = dropCap.GetParent();
letter.SetColor(255, 0, 0);
