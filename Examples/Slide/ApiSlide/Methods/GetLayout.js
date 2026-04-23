// Get a layout of the current slide in a presentation.

// Retrieve the slide layout using GetLayout method.

// Apply a background color to the layout using SetBackground.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const layout = slide.GetLayout();
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
layout.SetBackground(fill);
slide.FollowLayoutBackground();