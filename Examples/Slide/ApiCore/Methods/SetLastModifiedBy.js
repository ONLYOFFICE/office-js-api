// Set and retrieve the last modifier of a presentation in a presentation.

// How do I set the last modifier of a presentation in a presentation?

// Retrieve and display the last modifier as text in a presentation.

const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetLastModifiedBy("Mark Pottato");

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const lastModifiedBy = core.GetLastModifiedBy();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Last modified by: " + lastModifiedBy);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);