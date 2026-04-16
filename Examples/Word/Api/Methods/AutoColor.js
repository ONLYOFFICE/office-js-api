// Create an auto-color and use it as a font color in a document.

// How to auto color in a document?

// Auto color using the document API.

const doc = Api.GetDocument();
const color = Api.AutoColor();
const paragraph = doc.GetElement(0);
paragraph.AddText('This text is in auto color.');
paragraph.SetColor(color);