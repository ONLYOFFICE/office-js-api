// Set and get the creation date of a presentation using the core properties in a presentation.

// How can I set created using a core properties in a presentation?

// Set created for a core properties in a presentation.

const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetCreated(new Date('20 January 2000'));

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const createdDate = core.GetCreated().toDateString();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Created: " + createdDate);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);