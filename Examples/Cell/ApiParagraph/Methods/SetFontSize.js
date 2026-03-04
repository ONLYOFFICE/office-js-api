// This example shows how to set the font size for all text in a paragraph inside a shape.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(120, 140, 100));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(30),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('This text has a larger font size (24 half-points).');
paragraph.SetFontSize(24);

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This text has the default font size.');
content.Push(paragraph2);
