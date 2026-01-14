// This example sets the transition duration to 2000 milliseconds.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetType('fade');
transition.SetOption('fadeSmoothly');
transition.SetDuration(2000);

slide.SetSlideShowTransition(transition);
