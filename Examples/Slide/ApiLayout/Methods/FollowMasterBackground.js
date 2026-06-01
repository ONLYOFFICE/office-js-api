// Apply the master's background to a layout in the presentation.

// Layouts can inherit background properties from their master.

// The layout background now matches the master's background.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
master.SetBackground(fill);
const layout = master.GetLayout(0);
layout.FollowMasterBackground();
slide.FollowLayoutBackground();