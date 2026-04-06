// This example adds an animation effect to a sequence.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

// Create shape to animate
const shape = Api.CreateShape(
	'star5',
	120 * 36000, 120 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 0)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
shape.SetPosition(150 * 36000, 60 * 36000);
slide.AddObject(shape);

// Add fade animation effect
const timeLine = slide.GetTimeLine();
const mainSequence = timeLine.GetMainSequence();
const effect = mainSequence.AddEffect(shape, 'entranceFade', 'onclick');

// Configure effect timing
effect.SetDuration(1500);  // 1.5 seconds
effect.SetDelay(500);      // 0.5 second delay

const infoShape = Api.CreateShape(
	'rect',
	200 * 36000, 50 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(200, 200, 200)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
infoShape.SetPosition(20 * 36000, 10 * 36000);
const content = infoShape.GetDocContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Added effect: ' + effect.GetEffectType());
paragraph.AddLineBreak();
paragraph.AddText('Duration: ' + effect.GetDuration() + 'ms');
slide.AddObject(infoShape);
