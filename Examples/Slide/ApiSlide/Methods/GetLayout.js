// This example shows how to get a layout of the current slide.

// How to return a slide layout.

// Get a slide layout and set its background color.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const layout = slide.GetLayout();
const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
layout.SetBackground(fill);
slide.FollowLayoutBackground();
