// This example sets the transition speed to 'slow'.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetType('wipe');
transition.SetOption('left');
transition.SetSpeed('slow');

slide.SetSlideShowTransition(transition);
