// This example shows how to set the name for a drawing object.

const worksheet = Api.GetActiveSheet();

const fill = Api.CreateSolidFill(Api.RGB(80, 120, 160));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = worksheet.AddShape(
	'ellipse',
	Api.MillimetersToEmus(60), Api.MillimetersToEmus(40),
	fill, stroke,
	0, Api.MillimetersToEmus(20),
	0, Api.MillimetersToEmus(30)
);

drawing.SetName('BlueEllipse');
const content = drawing.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Name: ' + drawing.GetName());

worksheet.GetRange('A1').SetValue('Drawing name was set to: ' + drawing.GetName());
