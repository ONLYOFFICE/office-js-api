// This example shows how to create a color in RGBA format and use it as a font color.

const doc = Api.GetDocument();
const color = Api.RGBA(186, 218, 85, 255);
const paragraph = doc.GetElement(0);
paragraph.AddText('RGBA color is applied, but text transparency cannot be controlled this way yet.');
paragraph.SetColor(color);
