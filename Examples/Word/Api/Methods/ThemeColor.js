// Create a theme-color and use it as a font color in a document.

// How can I theme color in a document?

// Theme color in a document.

const doc = Api.GetDocument();
const color = Api.ThemeColor('accent6');
const paragraph = doc.GetElement(0);
paragraph.AddText('This text is in theme color.');
paragraph.SetColor(color);