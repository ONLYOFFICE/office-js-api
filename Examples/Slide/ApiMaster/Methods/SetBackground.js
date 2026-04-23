// Apply a background fill to a slide master.

// Create a solid fill with a custom color and set it as the master background.

// Clear any existing background before applying the new fill.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const master = presentation.GetMaster(0);
master.ClearBackground();
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
master.SetBackground(fill);