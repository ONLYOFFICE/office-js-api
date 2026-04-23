// Apply italic styling to the text of a paragraph in a document.

// How do I make the text in a paragraph appear in italics in a document?

// Slant paragraph text into italic form to add emphasis or distinguish it from surrounding content in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a text run with the font set to italicized letters.");
paragraph.SetItalic(true);