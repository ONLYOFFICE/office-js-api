// Identify the object type in a presentation.

// How do I verify that an object is a presentation in a presentation?

// Display the class type identifier for a presentation in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const classType = presentation.GetClassType();
paragraph.AddText("Class Type = " + classType);
slide.AddObject(shape);