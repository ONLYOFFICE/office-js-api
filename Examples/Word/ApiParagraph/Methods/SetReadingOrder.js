// Set the reading order of the text in the specified paragraph in a document.

// How do I set reading order in a document?

// Set reading order using a paragraph object in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Hello! مرحبا! 你好!');
doc.Push(paragraph);
paragraph.SetReadingOrder('rtl');