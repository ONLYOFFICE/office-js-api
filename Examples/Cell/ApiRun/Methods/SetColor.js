// Change the font color of a text run using a hex value in a spreadsheet.

// How do I set a specific color for text inside a shape in a spreadsheet?

// Apply a custom hex color to a run to visually distinguish it from surrounding text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape(
	'flowChartOnlineStorage',
	Api.MillimetersToEmus(120), Api.MillimetersToEmus(70),
	fill, stroke,
	0, Api.MillimetersToEmus(2), 0, Api.MillimetersToEmus(3)
);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.AddText('This is a text run with the font color set to gray.');
paragraph.AddElement(run);
run.SetColor(Api.HexColor('#808080'));