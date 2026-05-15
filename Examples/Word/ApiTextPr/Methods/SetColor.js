// Apply a specific color to the default text characters in a document.

// How do I change the color of text across a whole document?

// Paint the default font with a chosen color so every paragraph inherits that tint in a document.

const doc = Api.GetDocument();
const textPr = doc.GetDefaultTextPr();
textPr.SetColor(Api.HexColor('#FF6F3D'));
const paragraph = doc.GetElement(0);
paragraph.AddText('A sample text with the color set to orange using the text properties.');

const secondParagraph = Api.CreateParagraph();
secondParagraph.AddText('This text is in the same orange color set to the paragraph directly.');
const color = Api.RGB(255, 111, 61);
secondParagraph.GetTextPr().SetColor(color);
doc.Push(secondParagraph);