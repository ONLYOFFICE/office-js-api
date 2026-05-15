// Record when a presentation was last printed in a presentation.

// How do I track the last print date of a presentation?

// Store and retrieve the last printed timestamp for a presentation.

const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetLastPrinted(new Date());

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const lastPrintedDate = core.GetLastPrinted().toDateString();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Last printed: " + lastPrintedDate);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);