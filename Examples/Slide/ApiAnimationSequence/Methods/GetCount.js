// This example gets the number of effects in an animation sequence.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

// Create shapes
const shape1 = Api.CreateShape(
	'rect',
	80 * 36000, 80 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(61, 74, 107)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
shape1.SetPosition(50 * 36000, 80 * 36000);
slide.AddObject(shape1);

const shape2 = Api.CreateShape(
	'ellipse',
	80 * 36000, 80 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(107, 61, 74)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
shape2.SetPosition(150 * 36000, 80 * 36000);
slide.AddObject(shape2);

// Add animations
const timeLine = slide.GetTimeLine();
const mainSequence = timeLine.GetMainSequence();
mainSequence.AddEffect(shape1, 'fade', 'onclick');
mainSequence.AddEffect(shape2, 'bounce', 'afterprevious');

const count = mainSequence.GetCount();

const infoShape = Api.CreateShape(
	'rect',
	150 * 36000, 40 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(200, 200, 200)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
infoShape.SetPosition(20 * 36000, 10 * 36000);
const content = infoShape.GetDocContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Effects count: ' + count);
slide.AddObject(infoShape);
