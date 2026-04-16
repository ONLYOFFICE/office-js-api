// Get the internal identifier of a paragraph inside a shape in a spreadsheet.

// How can I get the internal id using a paragraph in a spreadsheet?

// Get the internal id for a paragraph in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(89, 130, 190));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(20),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Sample text.');

worksheet.GetRange('A1').SetValue('Paragraph ID: ' + paragraph.GetInternalId());