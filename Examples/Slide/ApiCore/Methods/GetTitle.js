// Set and get the title of the current presentation in a presentation.

// How can I get the title using a core properties in a presentation?

// Get the title for a core properties in a presentation.

const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetTitle("My Presentation Title");

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const title = core.GetTitle();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Title: " + title);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);