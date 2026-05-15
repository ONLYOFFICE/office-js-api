// Apply automatic text color to a paragraph in a document.

// How do I set text to use the automatic color in a document?

// Let the editor choose the appropriate text color automatically in a document.

const doc = Api.GetDocument();
const color = Api.AutoColor();
const paragraph = doc.GetElement(0);
paragraph.AddText('This text is in auto color.');
paragraph.SetColor(color);