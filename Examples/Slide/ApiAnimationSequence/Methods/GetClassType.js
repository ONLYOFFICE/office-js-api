// Find out the class type of an animation sequence object in a presentation.

// How can I get the class type of an animation sequence in a presentation?

// Get the class type of an animation sequence and display it in the presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const timeLine = slide.GetTimeLine();
const mainSequence = timeLine.GetMainSequence();
const classType = mainSequence.GetClassType();

const shape = Api.CreateShape(
	'rect',
	250 * 36000, 50 * 36000,
	Api.CreateSolidFill(Api.CreateRGBColor(61, 74, 107)),
	Api.CreateStroke(0, Api.CreateNoFill())
);
shape.SetPosition(100 * 36000, 100 * 36000);
const content = shape.GetDocContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Class type: ' + classType);
slide.AddObject(shape);