// This example sets the transition with push effect from right direction.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const transition = Api.CreateSlideShowTransition();
transition.SetType('push');
transition.SetOption('right');
transition.SetSpeed('fast');

slide.SetSlideShowTransition(transition);
