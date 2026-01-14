// This example gets the automatic advance time and displays it.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetType('push');
transition.SetOption('left');
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
