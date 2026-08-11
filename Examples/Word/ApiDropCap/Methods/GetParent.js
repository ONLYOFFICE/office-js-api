// Access the parent paragraph from which the drop cap was created in a document.

// Format the parent paragraph, such as its text color, in a document.

// Get the parent paragraph and set its text color to red in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Once upon a time, there was a paragraph that started with a large decorative letter.');
doc.Push(paragraph);
const dropCap = paragraph.SetDropCap('drop');
const parent = dropCap.GetParent();
parent.SetColor(255, 0, 0);