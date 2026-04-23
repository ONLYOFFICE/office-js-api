// Expand the space between individual characters in a paragraph inside a shape in a spreadsheet.

// How do I widen or tighten the gaps between letters in a paragraph in a spreadsheet?

// Adjust letter spacing to make text looser or more compact within a shape in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(150, 130, 100));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(30),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('This text has expanded spacing.');
paragraph.SetSpacing(80);

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This text has default spacing.');
content.Push(paragraph2);