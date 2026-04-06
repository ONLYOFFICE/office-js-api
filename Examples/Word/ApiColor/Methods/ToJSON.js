// This example shows how to convert ApiColor objects of different types to JSON strings.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const rgbColor = Api.RGB(64, 128, 192);
paragraph.AddText('RGB JSON:\n' + rgbColor.ToJSON());
paragraph.AddLineBreak();

paragraph.AddLineBreak();
const rgbaColor = Api.RGBA(100, 150, 200, 128);
paragraph.AddText('RGBA JSON:\n' + rgbaColor.ToJSON());
paragraph.AddLineBreak();

paragraph.AddLineBreak();
const hexColor = Api.HexColor('#2E86C1');
paragraph.AddText('HEX JSON:\n' + hexColor.ToJSON());
paragraph.AddLineBreak();

paragraph.AddLineBreak();
const themeColor = Api.ThemeColor('accent5');
paragraph.AddText('Theme JSON:\n' + themeColor.ToJSON());
paragraph.AddLineBreak();

paragraph.AddLineBreak();
const autoColor = Api.AutoColor();
paragraph.AddText('Auto JSON:\n' + autoColor.ToJSON());
