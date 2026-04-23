// Access a specific content element inside a hyperlink in a spreadsheet.

// How do I read the inner content of a hyperlink in a spreadsheet?

// Pull out an individual piece from a hyperlink by its position in a spreadsheet.

const worksheet = Api.GetActiveSheet();

const fill = Api.CreateSolidFill(Api.RGB(160, 100, 130));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(20),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
const run = Api.CreateRun();
run.AddText('Visit ONLYOFFICE for developers');
paragraph.AddElement(run, 0);

const hyperlink = run.AddHyperlink('https://api.onlyoffice.com', 'ONLYOFFICE for developers');
const element = hyperlink.GetElement(0);
const classType = element ? element.GetClassType() : 'null';
worksheet.GetRange('A1').SetValue('Element class type: ' + classType);