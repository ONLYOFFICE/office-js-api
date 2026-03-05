// This example sets the text color for the current text run.

// How to change a text color.

// Get a font object of characters and color it specifying a color in RGB format.

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
