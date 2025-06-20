// This example sets the background to the current slide master.

// How to set a background of a slide master.

// Create a solid fill and apply it as a background for a slide master.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const master = presentation.GetMaster(0);
master.ClearBackground();
const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
master.SetBackground(fill);
