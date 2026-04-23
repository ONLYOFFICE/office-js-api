// Set how many times an animation effect will repeat in a presentation.

// How do I make an animation play multiple times in a presentation?

// Configure an animation to loop a specified number of times in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const shape = Api.CreateShape(
	'rect',
	150 * 36000, 100 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(61, 74, 107)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
shape.SetPosition(100 * 36000, 80 * 36000);
slide.AddObject(shape);

const timeLine = slide.GetTimeLine();
const mainSequence = timeLine.GetMainSequence();
const effect = mainSequence.AddEffect(shape, 'emphasisPulse', 'onclick');

// Make it repeat 3 times
effect.SetRepeatCount(3);
const repeatCount = effect.GetRepeatCount();

const infoShape = Api.CreateShape(
	'rect',
	150 * 36000, 40 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(200, 200, 200)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
infoShape.SetPosition(20 * 36000, 10 * 36000);
const content = infoShape.GetDocContent();
const paragraph = content.GetElement(0);
paragraph.AddText('New repeat count: ' + repeatCount);
slide.AddObject(infoShape);