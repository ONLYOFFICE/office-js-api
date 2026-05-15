// Set and view the author name in a presentation.

// How do I find who created a presentation?

// Read the creator information stored in a presentation in a presentation.

const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetCreator("John Smith");

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const creator = core.GetCreator();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Creator: " + creator);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);