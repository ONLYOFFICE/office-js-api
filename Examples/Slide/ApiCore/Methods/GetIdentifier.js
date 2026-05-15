// Set and view the unique identifier of a presentation in a presentation.

// How do I retrieve the identifier for a presentation?

// Read the ID code assigned to a presentation in a presentation.

const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetIdentifier("#ID42");

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const identifier = core.GetIdentifier();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Identifier: " + identifier);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);