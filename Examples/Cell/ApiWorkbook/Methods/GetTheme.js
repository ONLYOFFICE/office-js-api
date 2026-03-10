// This example shows how to get the theme of the current workbook.

const workbook = Api.GetActiveWorkbook();
const worksheet = workbook.GetActiveSheet();

const theme = workbook.GetTheme();
const themeName = theme.GetName();

const fill = Api.CreateSolidFill(Api.ThemeColor('accent3'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'rect',
	Api.MillimetersToEmus(100), Api.MillimetersToEmus(40),
	fill, stroke,
	0, Api.MillimetersToEmus(2), 0, Api.MillimetersToEmus(3)
);

const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText('This shape is filled with the theme color "Accent 3".');
paragraph.AddText('Change the theme to see the fill color of the shape changed accordingly.\n\n');
paragraph.AddText('Workbook theme: ' + themeName);
