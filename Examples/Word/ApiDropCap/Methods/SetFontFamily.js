// Set the font family of a drop cap letter in a document.

// Use a different font for the drop cap letter of a paragraph in a document.

// Apply a specific font family to the decorative initial letter of a paragraph in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Once upon a time, there was a paragraph that started with a large decorative letter.');
doc.Push(paragraph);
const dropCap = paragraph.SetDropCap('drop');
dropCap.SetFontFamily('Times New Roman');
