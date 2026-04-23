// Append a new text run to the end of a paragraph inside a shape in a spreadsheet.

// How do I add text to the end of an existing paragraph in a spreadsheet?

// Extend a paragraph with extra content by inserting a run after all existing elements in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(130, 100, 160));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(20),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
const firstRun = paragraph.GetElement(0);
firstRun.AddText('Existing text. ');

const run = Api.CreateRun();
run.AddText('Pushed text.');
paragraph.Push(run);

worksheet.GetRange('A1').SetValue('Elements in paragraph: ' + paragraph.GetElementsCount());