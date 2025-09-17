// This example shows how to create a color in RGB format and use it as a font color.

const doc = Api.GetDocument();
const color = Api.RGB(186, 218, 85);
const paragraph = doc.GetElement(0);
paragraph.AddText('This text is in RGB color.');
paragraph.SetColor(color);
