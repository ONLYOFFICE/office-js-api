// This example sets the text color for the current text run in the RGB format.

// How to change text color.

// Create a text run object, update its font color using RGB format values.

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
