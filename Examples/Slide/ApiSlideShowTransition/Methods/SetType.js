// This example sets the transition type to 'fade'.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetType('fade');
transition.SetOption('fadeSmoothly');
transition.SetSpeed('medium');

slide.SetSlideShowTransition(transition);
