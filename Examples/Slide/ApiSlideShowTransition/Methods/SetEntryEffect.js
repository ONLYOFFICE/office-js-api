// Set the entry effect for a slide show transition.

// Configure the entry effect property of a slide show transition object.

// Apply the transition and display the entry effect value on the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetEntryEffect('effectCoverLeftDown');
transition.SetSpeed('medium');

slide.SetSlideShowTransition(transition);

const shape = Api.CreateShape(
	'rect',
	250 * 36000, 50 * 36000,
	Api.CreateSolidFill(Api.HexColor('#aba4e8')),
	Api.CreateStroke(0, Api.CreateNoFill())
);
const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Entry Effect: effectCoverLeftDown');
slide.AddObject(shape);