// Identify the type of a shape's text content in a presentation.

// How do I find out what type of text content a shape has in a presentation?

// Retrieve the class type of a shape's content and display it on the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const classType = docContent.GetClassType();
paragraph.AddText("Class Type: " + classType);
slide.AddObject(shape);