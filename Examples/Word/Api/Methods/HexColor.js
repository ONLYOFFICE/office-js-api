// Apply a custom color defined by a hex code to text in a document.

// How do I set a font color using a hex value in a document?

// Color paragraph text with a specific hex color in a document.

const doc = Api.GetDocument();
const color = Api.HexColor('#DECADE');
const paragraph = doc.GetElement(0);
paragraph.AddText('This text is in hex color.');
paragraph.SetColor(color);