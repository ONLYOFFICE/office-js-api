// This example shows how to get the last non-empty element of a paragraph inside a shape.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(140, 100, 120));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(20),
	fill, stroke,
	0, 0, 2, 0
);
const content = shape.GetContent();
const paragraph = content.GetElement(0);

const run1 = Api.CreateRun();
run1.AddText('First. ');
paragraph.AddElement(run1);

const run2 = Api.CreateRun();
run2.AddText('Last.');
paragraph.AddElement(run2);

const last = paragraph.Last();
worksheet.GetRange('A1').SetValue('Last element text: ' + last.GetText());
