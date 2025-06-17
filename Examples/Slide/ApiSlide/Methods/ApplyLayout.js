// This example applies the specified layout to the slide. The layout must be in slide master.

// How to apply a layout to the slide.

// Get a layout from the presentation master using its index and apply it to the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);
const layout = master.GetLayout(4);
slide.ApplyLayout(layout);
