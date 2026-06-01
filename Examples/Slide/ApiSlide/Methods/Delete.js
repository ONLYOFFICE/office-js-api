// Remove a slide from a presentation.

// How do I delete a slide in a presentation?

// Add a new slide and then remove it from the presentation.

const presentation = Api.GetPresentation();
let slide = Api.CreateSlide();

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
slide.SetBackground(fill);
presentation.AddSlide(slide);

slide = presentation.GetSlideByIndex(0);
slide.Delete();