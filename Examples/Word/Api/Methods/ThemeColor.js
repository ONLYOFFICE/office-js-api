// This example shows how to create a theme-color and use it as a font color.

const doc = Api.GetDocument();
const color = Api.ThemeColor('accent6');
const paragraph = doc.GetElement(0);
paragraph.AddText('This text is in theme color.');
paragraph.SetColor(color);
