// This example sets the layout background as the background of the slide.

// How to set a slide's background same as the layout's.

// Get a slide by its index and set its background as its layout.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);
const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
layout.SetBackground(fill);
slide.FollowLayoutBackground();
