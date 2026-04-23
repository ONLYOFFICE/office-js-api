// Create a copy of a slide in a presentation.

// How do I copy a slide in a presentation?

// Add the copied slide to the presentation in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
slide.SetBackground(fill);

const copySlide = slide.Copy();
presentation.AddSlide(copySlide);