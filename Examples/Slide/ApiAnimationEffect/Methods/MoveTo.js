// This example moves an animation effect to a different position.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

// Create shapes
const shape1 = Api.CreateShape(
	'rect',
	80 * 36000, 80 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(61, 74, 107)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
shape1.SetPosition(30 * 36000, 80 * 36000);
slide.AddObject(shape1);

const shape2 = Api.CreateShape(
	'ellipse',
	80 * 36000, 80 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(107, 61, 74)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
shape2.SetPosition(130 * 36000, 80 * 36000);
slide.AddObject(shape2);

const shape3 = Api.CreateShape(
	'star5',
	80 * 36000, 80 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(74, 107, 61)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
shape3.SetPosition(230 * 36000, 80 * 36000);
slide.AddObject(shape3);

// Add animations
const timeLine = slide.GetTimeLine();
const mainSequence = timeLine.GetMainSequence();
const effect1 = mainSequence.AddEffect(shape1, 'entranceFade', 'onclick');
mainSequence.AddEffect(shape2, 'entranceFlyIn', 'afterprevious');
mainSequence.AddEffect(shape3, 'entranceBounce', 'afterprevious');

// Move first effect to position 2
effect1.MoveTo(2);

const infoShape = Api.CreateShape(
	'rect',
	200 * 36000, 40 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(200, 200, 200)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
infoShape.SetPosition(20 * 36000, 10 * 36000);
const content = infoShape.GetDocContent();
const paragraph = content.GetElement(0);
paragraph.AddText('First effect moved to position 2');
slide.AddObject(infoShape);
