// Get the automatic advance time and display it in a presentation.

// How to get the advance time for a slide show transition?

// Get the advance time and display the result in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetEntryEffect('effectPushLeft');
transition.SetSpeed('fast');
transition.SetAdvanceOnTime(true);
transition.SetAdvanceTime(2500);
slide.SetSlideShowTransition(transition);

const retrievedTransition = slide.GetSlideShowTransition();
const advanceTime = retrievedTransition.GetAdvanceTime();

const shape = Api.CreateShape(
	'rect',
	250 * 36000, 50 * 36000,
	Api.CreateSolidFill(Api.HexColor('#61cbd1')),
	Api.CreateStroke(0, Api.CreateNoFill())
);
const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Advance Time: ' + advanceTime + ' ms');
slide.AddObject(shape);