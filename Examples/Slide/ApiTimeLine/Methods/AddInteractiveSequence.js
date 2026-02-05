// This example creates an interactive animation sequence.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

// Create trigger button
const button = Api.CreateShape(
	'roundRect',
	100 * 36000, 40 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(0, 150, 0)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
button.SetPosition(50 * 36000, 50 * 36000);
const buttonContent = button.GetDocContent();
const buttonPara = buttonContent.GetElement(0);
buttonPara.AddText('Click me!');
slide.AddObject(button);

// Create shape to animate
const animatedShape = Api.CreateShape(
	'star5',
	100 * 36000, 100 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 0)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
animatedShape.SetPosition(200 * 36000, 100 * 36000);
slide.AddObject(animatedShape);

// Create interactive sequence
const timeLine = slide.GetTimeLine();
const interactiveSeq = timeLine.AddInteractiveSequence(button);
interactiveSeq.AddEffect(animatedShape, 'spin', 'onclick');

const infoShape = Api.CreateShape(
	'rect',
	200 * 36000, 30 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(200, 200, 200)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
infoShape.SetPosition(20 * 36000, 10 * 36000);
const content = infoShape.GetDocContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Click the green button to spin the star!');
slide.AddObject(infoShape);
