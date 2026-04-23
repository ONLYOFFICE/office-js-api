// Retrieve all click-triggered animation sequences on a slide in a presentation.

// How do I access the interactive animations that respond to clicks in a presentation?

// Collect all animation sequences that are activated by user interactions in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

// Create a trigger shape
const triggerShape = Api.CreateShape(
	'ellipse',
	80 * 36000, 80 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(255, 100, 100)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
triggerShape.SetPosition(50 * 36000, 100 * 36000);
slide.AddObject(triggerShape);

// Create animated shape
const animatedShape = Api.CreateShape(
	'rect',
	150 * 36000, 100 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(61, 74, 107)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
animatedShape.SetPosition(180 * 36000, 100 * 36000);
slide.AddObject(animatedShape);

const timeLine = slide.GetTimeLine();

// Create interactive sequence triggered by clicking the red circle
const interactiveSeq = timeLine.AddInteractiveSequence(triggerShape);
interactiveSeq.AddEffect(animatedShape, 'entranceFlyIn', 'onclick');

const sequences = timeLine.GetInteractiveSequences();

const infoShape = Api.CreateShape(
	'rect',
	200 * 36000, 40 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(200, 200, 200)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
infoShape.SetPosition(20 * 36000, 10 * 36000);
const content = infoShape.GetDocContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Interactive sequences count: ' + sequences.length);
slide.AddObject(infoShape);