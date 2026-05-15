// Get the entry effect from a slide show transition.

// Retrieve the entry effect identifier from a slide show transition object.

// Display the entry effect value in a shape on the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetEntryEffect('effectUncoverRight');
transition.SetSpeed('medium');
slide.SetSlideShowTransition(transition);

const retrievedTransition = slide.GetSlideShowTransition();
const entryEffect = retrievedTransition.GetEntryEffect();

const shape = Api.CreateShape(
	'rect',
	300 * 36000, 50 * 36000,
	Api.CreateSolidFill(Api.HexColor('#ff9447')),
	Api.CreateStroke(0, Api.CreateNoFill())
);
const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Entry Effect: ' + entryEffect);
slide.AddObject(shape);