// This example shows how to set small caps formatting for all text in a paragraph inside a shape.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(110, 120, 160));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(30),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('This text is displayed in small caps.');
paragraph.SetSmallCaps(true);

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This text has normal capitalization.');
content.Push(paragraph2);
