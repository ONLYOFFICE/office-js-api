// This example sets the automatic advance time to 4 seconds (4000 milliseconds).

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetType('fade');
transition.SetOption('fadeThroughBlack');
transition.SetSpeed('medium');
transition.SetAdvanceOnTime(true);
transition.SetAdvanceTime(4000);

slide.SetSlideShowTransition(transition);
