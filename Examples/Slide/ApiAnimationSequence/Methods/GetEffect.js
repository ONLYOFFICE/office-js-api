// Get an animation effect from a sequence by its position in a presentation.

// How do I access a specific animation from a list of animations in a presentation?

// Retrieve an animation effect at a given index in a sequence in a presentation.

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

// Add animation
const timeLine = slide.GetTimeLine();
const mainSequence = timeLine.GetMainSequence();
mainSequence.AddEffect(shape, 'entranceFlyIn', 'onclick');

// Get the first effect
const effect = mainSequence.GetEffect(0);
const effectType = effect ? effect.GetEffectType() : 'none';

const infoShape = Api.CreateShape(
	'rect',
	150 * 36000, 40 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(200, 200, 200)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
infoShape.SetPosition(20 * 36000, 10 * 36000);
const content = infoShape.GetDocContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Effect at index 0: ' + effectType);
slide.AddObject(infoShape);