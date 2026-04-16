// Create a hex color and use it as a font color in a document.

// How do I hex color in a document?

// Hex color and display the result in a document.

const doc = Api.GetDocument();
const color = Api.HexColor('#DECADE');
const paragraph = doc.GetElement(0);
paragraph.AddText('This text is in hex color.');
paragraph.SetColor(color);