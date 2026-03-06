// This example shows how to create an auto-color and use it as a font color.

const doc = Api.GetDocument();
const color = Api.AutoColor();
const paragraph = doc.GetElement(0);
paragraph.AddText('This text is in auto color.');
paragraph.SetColor(color);
