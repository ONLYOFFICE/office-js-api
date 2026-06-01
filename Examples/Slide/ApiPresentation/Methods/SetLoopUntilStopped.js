// Enable continuous playback of a presentation until stopped.

// How do I make a presentation loop continuously in a presentation?

// Set the presentation to loop and display the current loop status.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
const isLooping = presentation.GetLoopUntilStopped();
paragraph.AddText("Loop until stopped initial value: " + isLooping);

presentation.SetLoopUntilStopped(true);
paragraph.AddText("\nLoop until stopped new value: " + presentation.GetLoopUntilStopped());
slide.AddObject(shape);