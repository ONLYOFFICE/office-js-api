// Set the reading direction of a paragraph to left-to-right or right-to-left in a document.

// How do I make a paragraph display text in a right-to-left reading order in a document?

// Switch a paragraph's text flow to match a language that reads from right to left in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Hello! مرحبا! 你好!');
doc.Push(paragraph);
paragraph.SetReadingOrder('rtl');