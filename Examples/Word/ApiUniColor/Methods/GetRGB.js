// This example shows how to get the RGB values of a ApiUniColor (ApiPresetColor is inherited from ApiUniColor).

const doc = Api.GetDocument();
const firstParagraph = doc.GetElement(0);

const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const presetColor = Api.CreatePresetColor('peachPuff');
const fill = Api.CreateSolidFill(presetColor);
const drawing = Api.CreateShape('rect', 150 * 36000, 10 * 36000, fill, stroke);
firstParagraph.AddDrawing(drawing);

const rgbPacked = presetColor.GetRGB();
const rgb = {
	R: rgbPacked >> 16 & 0xFF,
	G: rgbPacked >> 8 & 0xFF,
	B: rgbPacked & 0xFF
};

const paragraph = Api.CreateParagraph();
paragraph.AddText('ApiPresetColor is inherited from ApiUniColor.\n');
let text = '\'peachPuff\' preset color in RGB format:';
text += '\nR: ' + rgb.R;
text += '\nG: ' + rgb.G;
text += '\nB: ' + rgb.B;
paragraph.AddText(text);
doc.Push(paragraph);
