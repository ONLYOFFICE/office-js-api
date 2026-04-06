// This example shows how to serialize a paragraph to JSON format.

const worksheet = Api.GetActiveSheet();

const fill = Api.CreateSolidFill(Api.RGB(120, 110, 150));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(20),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('This paragraph will be converted to JSON.');

const json = paragraph.ToJSON(true, true);
worksheet.GetRange('A1').SetValue('JSON length: ' + json.length);
