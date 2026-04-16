// Get the hex representation of the color in a document.

// How to get the hex for a color in a document?

// Get the hex and display the result in a document.

const doc = Api.GetDocument();

const themeColor = Api.ThemeColor('accent1');
const autoColor = Api.AutoColor();
const rgbaColor = Api.HexColor('#FF0000');

const themeColorHex = themeColor.GetHex();
const autoColorHex = autoColor.GetHex();
const rgbaColorHex = rgbaColor.GetHex();

const paragraph = doc.GetElement(0);
paragraph.AddText('Hex of themeColor: ' + themeColorHex);
paragraph.AddLineBreak();
paragraph.AddText('Hex of autoColor: ' + autoColorHex);
paragraph.AddLineBreak();
paragraph.AddText('Hex of rgbaColor: ' + rgbaColorHex);
paragraph.AddLineBreak();
paragraph.AddText('Hex for theme colors and auto color are always opaque black; actual color depends on the document theme.');