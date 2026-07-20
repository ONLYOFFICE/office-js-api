// Change the type of a drop cap between in-text and in-margin in a document.

// How do I move a drop cap from the text into the margin in a document?

// Switch an existing in-text drop cap to an in-margin drop cap in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Once upon a time, there was a paragraph that started with a large decorative letter.');
doc.Push(paragraph);
const dropCap = paragraph.SetDropCap('drop');
dropCap.SetPosition('margin');
