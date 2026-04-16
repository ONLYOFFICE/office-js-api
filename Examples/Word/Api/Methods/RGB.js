// Create a color in RGB format and use it as a font color in a document.

// How can I r g b in a document?

// R g b in a document using the editor API in a document.

const doc = Api.GetDocument();
const color = Api.RGB(186, 218, 85);
const paragraph = doc.GetElement(0);
paragraph.AddText('This text is in RGB color.');
paragraph.SetColor(color);