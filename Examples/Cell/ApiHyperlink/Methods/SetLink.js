// Set a new URL for a hyperlink inside a shape in a spreadsheet.

// How can I set link using a hyperlink in a spreadsheet?

// Set link for a hyperlink in a spreadsheet.

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

hyperlink.SetLink('https://helpcenter.onlyoffice.com');
worksheet.GetRange('A1').SetValue('New link: ' + hyperlink.GetLinkedText());