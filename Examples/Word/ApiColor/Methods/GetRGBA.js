// This example shows how to get the RGBA components of the color.

const doc = Api.GetDocument();

const themeColor = Api.ThemeColor('accent1');
const autoColor = Api.AutoColor();
const hexColor = Api.HexColor('#FF0000');

const themeColorRGB = themeColor.GetRGBA();
const autoColorRGB = autoColor.GetRGBA();
const hexColorRGB = hexColor.GetRGBA();

const paragraph = doc.GetElement(0);
paragraph.AddText('RGBA of themeColor: ' + themeColorRGB.r + ', ' + themeColorRGB.g + ', ' + themeColorRGB.b + ', ' + themeColorRGB.a);
paragraph.AddLineBreak();
paragraph.AddText('RGBA of autoColor: ' + autoColorRGB.r + ', ' + autoColorRGB.g + ', ' + autoColorRGB.b + ', ' + autoColorRGB.a);
paragraph.AddLineBreak();
paragraph.AddText('RGBA of hexColor: ' + hexColorRGB.r + ', ' + hexColorRGB.g + ', ' + hexColorRGB.b + ', ' + hexColorRGB.a);
paragraph.AddLineBreak();
paragraph.AddText('RGBA for theme colors and auto color are always opaque black; actual color depends on the document theme.');
