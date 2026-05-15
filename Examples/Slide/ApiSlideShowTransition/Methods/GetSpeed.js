// Get the transition speed and display it in a presentation.

// Retrieve the speed value from a slide show transition object.

// Display the retrieved speed in a shape on the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetEntryEffect('effectWheelReverse1Spoke');
transition.SetDuration(5000);
slide.SetSlideShowTransition(transition);

const retrievedTransition = slide.GetSlideShowTransition();
const transitionSpeed = retrievedTransition.GetSpeed();

const shape = Api.CreateShape(
	'rect',
	200 * 36000, 50 * 36000,
	Api.CreateSolidFill(Api.HexColor('#61cbd1')),
	Api.CreateStroke(0, Api.CreateNoFill())
);
const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Transition Speed is ' + transitionSpeed);
slide.AddObject(shape);