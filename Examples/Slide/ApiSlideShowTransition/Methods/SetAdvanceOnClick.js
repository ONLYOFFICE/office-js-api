// This example enables advancing to the next slide on mouse click.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetEntryEffect('effectCoverLeft');
transition.SetSpeed('medium');
transition.SetAdvanceOnClick(false);
transition.SetAdvanceOnTime(true);
transition.SetAdvanceTime(5000);

slide.SetSlideShowTransition(transition);

const shape = Api.CreateShape(
	'rect',
	250 * 36000, 50 * 36000,
	Api.CreateSolidFill(Api.HexColor('#aba4e8')),
	Api.CreateStroke(0, Api.CreateNoFill())
);
const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Advance On Click set to false. Slide will advance automatically after 5 seconds.');
slide.AddObject(shape);
