// This example clears backgound for a slide.

// How to remove a background from a layout.

// Clear background from a layout object.

const presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);

const gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
layout.SetBackground(fill);
slide.FollowLayoutBackground();
slide = Api.CreateSlide();
presentation.AddSlide(slide);
layout.ClearBackground();
slide.FollowLayoutBackground();
