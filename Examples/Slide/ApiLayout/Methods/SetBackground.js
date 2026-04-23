// Apply a fill color to the background of a layout in a presentation.

// How do I change the background appearance of a layout in a presentation?

// Create a gradient fill and assign it as the layout background in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
layout.SetBackground(fill);
slide.FollowLayoutBackground();