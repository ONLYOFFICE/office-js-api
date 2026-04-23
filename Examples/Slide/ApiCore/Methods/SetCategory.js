// Assign a category to a presentation in a presentation.

// How do I set a category for a presentation in a presentation?

// Set a category and display it as text in a presentation.

const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetCategory("Examples");

const fill = Api.CreateSolidFill(Api.RGB(200, 50, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 200 * 36000, 100 * 36000, fill, stroke);
shape.SetPosition(0, 0);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const category = core.GetCategory();
paragraph.AddText("Category: " + category);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);