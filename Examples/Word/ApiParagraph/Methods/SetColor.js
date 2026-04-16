// Set the text color to the current paragraph in a document.

// Color the paragraph text with orange in a document.

// Get the first paragraph and make its font color orange in a document.

const doc = Api.GetDocument();
const firstParagraph = doc.GetElement(0);
firstParagraph.AddText('This is a paragraph with the font color set to orange.');
firstParagraph.SetColor(Api.HexColor('#FF6F3D'));

const color = Api.HexColor('ff6f3d');
const secondParagraph = Api.CreateParagraph();
secondParagraph.AddText('This text is in same orange color, but created using HexColor method.');
secondParagraph.SetColor(color);
doc.Push(secondParagraph);