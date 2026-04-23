// Set and retrieve the keywords of a presentation in a presentation.

// How do I set the keywords of a presentation in a presentation?

// Retrieve and display the keywords as text in a presentation.

const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetKeywords("Example; ApiCore; Presentation");

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const keywords = core.GetKeywords();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Keywords: " + keywords);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);