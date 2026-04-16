// Check the class type returned by a core properties in a presentation.

// How do I check what type a core properties object is in a presentation?

// Retrieve and output the class type string for a core properties in a presentation.

const presentation = Api.GetPresentation();
const core = presentation.GetCore();
const classType = core.GetClassType();

const fill = Api.CreateSolidFill(Api.RGB(150, 200, 150));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 100 * 36000, fill, stroke);
shape.SetPosition(0, 2 * 36000);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Class type: " + classType);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);