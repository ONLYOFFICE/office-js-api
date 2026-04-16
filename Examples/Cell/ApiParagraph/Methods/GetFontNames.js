// Get all font names used in a paragraph inside a shape in a spreadsheet.

// How to get the font names for a paragraph in a spreadsheet?

// Get the font names and display the result in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(140, 120, 160));
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
paragraph.SetFontFamily('Consolas');

const fontNames = paragraph.GetFontNames();
worksheet.GetRange('A1').SetValue('Fonts used: ' + fontNames.join(', '));