// Retrieve the advance on click setting from a transition.

// Create a slide show transition with specific properties.

// Get the advance on click value and display it on the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetEntryEffect('effectFade');
transition.SetSpeed('medium');
transition.SetAdvanceOnClick(true);
slide.SetSlideShowTransition(transition);

const retrievedTransition = slide.GetSlideShowTransition();
const advanceOnClick = retrievedTransition.GetAdvanceOnClick();

const shape = Api.CreateShape(
	'rect',
	250 * 36000, 50 * 36000,
	Api.CreateSolidFill(Api.HexColor('#61cbd1')),
	Api.CreateStroke(0, Api.CreateNoFill())
);
const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Advance On Click: ' + advanceOnClick);
slide.AddObject(shape);