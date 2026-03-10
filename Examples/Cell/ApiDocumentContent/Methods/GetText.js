// This example shows how to get all text from the document content of a shape.

const worksheet = Api.GetActiveSheet();

const fill = Api.CreateSolidFill(Api.RGB(89, 130, 190));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(25),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Hello, world!');
paragraph.AddLineBreak();

const run = Api.CreateRun();
run.AddText('Text from run.');
paragraph.AddElement(run);

const text = content.GetText();
worksheet.GetRange('A1').SetValue('Text: ' + text);
