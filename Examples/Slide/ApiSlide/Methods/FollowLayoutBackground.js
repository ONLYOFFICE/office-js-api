// Apply a layout's background to a slide in a presentation.

// How do I use a layout's background for a slide in a presentation?

// Set the slide's background to match the layout it uses in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const layout = slide.GetLayout();
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
layout.SetBackground(fill);
slide.SetBackground(Api.CreateSolidFill(Api.RGB(255, 255, 255)));
slide.FollowLayoutBackground();