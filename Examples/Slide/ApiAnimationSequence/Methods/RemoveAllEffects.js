// This example removes all effects from an animation sequence.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

// Create shapes
const shape1 = Api.CreateShape(
	'rect',
	100 * 36000, 80 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(61, 74, 107)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
shape1.SetPosition(50 * 36000, 80 * 36000);
slide.AddObject(shape1);

const shape2 = Api.CreateShape(
	'ellipse',
	100 * 36000, 80 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(107, 61, 74)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
shape2.SetPosition(180 * 36000, 80 * 36000);
slide.AddObject(shape2);

const timeLine = slide.GetTimeLine();
const mainSequence = timeLine.GetMainSequence();

// Add animations
mainSequence.AddEffect(shape1, 'fade', 'onclick');
mainSequence.AddEffect(shape2, 'fly-in', 'afterprevious');

const countBefore = mainSequence.GetCount();

// Remove all effects
mainSequence.RemoveAllEffects();

const countAfter = mainSequence.GetCount();

const infoShape = Api.CreateShape(
	'rect',
	200 * 36000, 50 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(200, 200, 200)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
infoShape.SetPosition(20 * 36000, 10 * 36000);
const content = infoShape.GetDocContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Effects before: ' + countBefore);
paragraph.AddLineBreak();
paragraph.AddText('Effects after: ' + countAfter);
slide.AddObject(infoShape);
