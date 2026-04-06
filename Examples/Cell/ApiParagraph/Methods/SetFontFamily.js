// This example shows how to set the font family for all text in a paragraph inside a shape.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(100, 150, 150));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(30),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('This text uses the Georgia font family.');
paragraph.SetFontFamily('Georgia');

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This text uses the default font family.');
content.Push(paragraph2);
