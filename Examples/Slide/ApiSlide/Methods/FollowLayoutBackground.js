// Apply a layout's background to a slide in a presentation.

// How do I use a layout's background for a slide in a presentation?

// Set the slide's background to match the layout it uses in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
layout.SetBackground(fill);
slide.FollowLayoutBackground();