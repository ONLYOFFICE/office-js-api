// This example shows how to get the hex representation of the color.

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
