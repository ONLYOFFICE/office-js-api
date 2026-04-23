// Mark the last modification date of a presentation in a presentation.

// How do I set when a presentation was last edited?

// Update and display the modification timestamp for a presentation.

const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetModified(new Date("10 March 1990"));

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const lastModifiedDate = core.GetModified().toDateString();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Last modified: " + lastModifiedDate);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);