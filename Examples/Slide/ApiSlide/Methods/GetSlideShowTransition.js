// This example gets the slide show transition from a slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetType('wipe');
transition.SetOption('left');
transition.SetSpeed('medium');
slide.SetSlideShowTransition(transition);

const retrievedTransition = slide.GetSlideShowTransition();
const transitionType = retrievedTransition.GetType();
const transitionOption = retrievedTransition.GetOption();
const transitionSpeed = retrievedTransition.GetSpeed();

const shape = Api.CreateShape(
	'rect',
	300 * 36000, 100 * 36000,
	Api.CreateSolidFill(Api.HexColor('#61cbd1')),
	Api.CreateStroke(0, Api.CreateNoFill())
);
const content = shape.GetDocContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Transition Type: ' + transitionType);
paragraph.AddLineBreak();
paragraph.AddText('Option: ' + transitionOption);
paragraph.AddLineBreak();
paragraph.AddText('Speed: ' + transitionSpeed);
slide.AddObject(shape);
