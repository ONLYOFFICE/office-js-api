// Assign a revision number to a presentation in a presentation.

// How do I add a revision identifier to a presentation?

// Set and read the revision information for a presentation.

const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetRevision("Rev. B");

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const revision = core.GetRevision();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Revision: " + revision);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);