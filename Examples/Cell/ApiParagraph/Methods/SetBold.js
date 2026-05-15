// Make all text in a paragraph bold inside a shape in a spreadsheet.

// How do I apply bold formatting to an entire paragraph in a spreadsheet?

// Emphasize a paragraph's text by turning on bold weight for every character in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(160, 100, 110));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(30),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('This text is bold.');
paragraph.SetBold(true);

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This text is not bold.');
content.Push(paragraph2);