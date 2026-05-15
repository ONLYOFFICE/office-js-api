// Apply a theme color to paragraph text in a document.

// How do I color text using the document's theme palette in a document?

// Set the font color of a paragraph to one of the built-in theme accent colors in a document.

const doc = Api.GetDocument();
const color = Api.ThemeColor('accent6');
const paragraph = doc.GetElement(0);
paragraph.AddText('This text is in theme color.');
paragraph.SetColor(color);