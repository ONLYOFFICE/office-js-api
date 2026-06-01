// Apply a predefined layout from the slide master to the current slide.

// Retrieve the master slide and select a specific layout by index.

// Set the layout to the slide using the master's layout definition.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);
const layout = master.GetLayout(4);
slide.ApplyLayout(layout);