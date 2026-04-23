// Create a custom color from red, green, and blue values and apply it to text in a document.

// How do I set text color using red, green, and blue values in a document?

// Color paragraph text with a specific RGB combination in a document.

const doc = Api.GetDocument();
const color = Api.RGB(186, 218, 85);
const paragraph = doc.GetElement(0);
paragraph.AddText('This text is in RGB color.');
paragraph.SetColor(color);