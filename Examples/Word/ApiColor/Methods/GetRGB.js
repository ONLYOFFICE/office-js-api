// This example shows how to get the RGB components of the color.

const doc = Api.GetDocument();

const themeColor = Api.ThemeColor('accent1');
const autoColor = Api.AutoColor();
const hexColor = Api.HexColor('#FF0000');

const themeColorRGB = themeColor.GetRGB();
const autoColorRGB = autoColor.GetRGB();
const hexColorRGB = hexColor.GetRGB();

const paragraph = doc.GetElement(0);
paragraph.AddText('RGB of themeColor: ' + themeColorRGB.r + ', ' + themeColorRGB.g + ', ' + themeColorRGB.b);
paragraph.AddLineBreak();
paragraph.AddText('RGB of autoColor: ' + autoColorRGB.r + ', ' + autoColorRGB.g + ', ' + autoColorRGB.b);
paragraph.AddLineBreak();
paragraph.AddText('RGB of hexColor: ' + hexColorRGB.r + ', ' + hexColorRGB.g + ', ' + hexColorRGB.b);
paragraph.AddLineBreak();
paragraph.AddText('RGB for theme colors and auto color are always opaque black; actual color depends on the document theme.');
