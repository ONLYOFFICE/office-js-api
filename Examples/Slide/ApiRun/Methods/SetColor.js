// This example sets the text color for the current text run in the RGB format.

// How to change text color.

// Create a new text run and change its font color.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.HexColor('#5B9BD5'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape(
	'rect',
	Api.MillimetersToEmus(120), Api.MillimetersToEmus(40),
	fill, stroke
);
shape.SetPosition(Api.MillimetersToEmus(10), Api.MillimetersToEmus(20));

const content = shape.GetContent();
const paragraph = content.GetElement(0);
const run = Api.CreateRun();
run.AddText('This is a text run with the font color set to light blue.');
paragraph.AddElement(run);
run.SetColor(Api.HexColor('#aad3ff'));
slide.AddObject(shape);
