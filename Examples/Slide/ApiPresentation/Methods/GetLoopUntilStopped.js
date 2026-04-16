// Get the loop-until-stopped setting of the presentation in a presentation.

// How can I get the loop until stopped using a presentation in a presentation?

// Get the loop until stopped for a presentation in a presentation.

const presentation = Api.GetPresentation();
presentation.SetLoopUntilStopped(true);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
const isLooping = presentation.GetLoopUntilStopped();
paragraph.AddText("Loop until stopped: " + isLooping);
slide.AddObject(shape);