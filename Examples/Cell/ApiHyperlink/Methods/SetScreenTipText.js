// Assign a tooltip message to a hyperlink in a spreadsheet.

// How do I add a hover hint to a hyperlink in a spreadsheet?

// Attach a short description that appears when a user points at the hyperlink in a spreadsheet.

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

const hyperlink = run.AddHyperlink('https://api.onlyoffice.com', 'NO SCREEN TIP');

hyperlink.SetScreenTipText('ONLYOFFICE for developers');
worksheet.GetRange('A1').SetValue('Screen tip: ' + hyperlink.GetScreenTipText());