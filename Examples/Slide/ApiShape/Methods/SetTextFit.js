// This example sets different text fit types to shapes on the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const longText = 'This is a long text to demonstrate how the text fit setting works inside the shape.';

const shape1 = Api.CreateShape(
	'rect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(30),
	Api.CreateSolidFill(Api.RGB(60, 50, 80)), stroke
);
shape1.SetPosition(Api.MillimetersToEmus(5), Api.MillimetersToEmus(30));
const paragraph1 = shape1.GetContent().GetElement(0);
paragraph1.AddText('noAutoFit: ' + longText);
shape1.SetTextFit('noAutoFit');
slide.AddObject(shape1);

const shape2 = Api.CreateShape(
	'rect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(30),
	Api.CreateSolidFill(Api.RGB(50, 75, 65)), stroke
);
shape2.SetPosition(Api.MillimetersToEmus(85), Api.MillimetersToEmus(30));
const paragraph2 = shape2.GetContent().GetElement(0);
paragraph2.AddText('autoFit: ' + longText);
shape2.SetTextFit('autoFit');
slide.AddObject(shape2);

const shape3 = Api.CreateShape(
	'rect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(30),
	Api.CreateSolidFill(Api.RGB(75, 55, 55)), stroke
);
shape3.SetPosition(Api.MillimetersToEmus(165), Api.MillimetersToEmus(30));
const paragraph3 = shape3.GetContent().GetElement(0);
paragraph3.AddText('normAutoFit: ' + longText);
shape3.SetTextFit('normAutoFit');
slide.AddObject(shape3);
