// Get the current run from the document content of a shape in a spreadsheet.

// How to get current run for a document content?

// Get current run and display the result in a spreadsheet.

const worksheet = Api.GetActiveSheet();

const fill = Api.CreateSolidFill(Api.RGB(89, 130, 190));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'rect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(25),
	fill, stroke,
	1, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
const run = paragraph.GetElement(0);
run.AddText('Run text.');

const currentRun = content.GetCurrentRun();
const result = currentRun ? currentRun.GetText() : 'null';
worksheet.GetRange('A1').SetValue('Current run: ' + result);