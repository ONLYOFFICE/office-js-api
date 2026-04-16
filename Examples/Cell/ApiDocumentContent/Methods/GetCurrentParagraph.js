// Get the current paragraph from the document content of a shape in a spreadsheet.

// How to get current paragraph for a document content?

// Get current paragraph and display the result in a spreadsheet.

const worksheet = Api.GetActiveSheet();

const fill = Api.CreateSolidFill(Api.RGB(89, 130, 190));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'rect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(25),
	fill, stroke,
	0, 0, 1, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Current paragraph text.');

const currentParagraph = content.GetCurrentParagraph();
const result = currentParagraph ? currentParagraph.GetText() : 'null';
worksheet.GetRange('A1').SetValue('Current paragraph: ' + result);