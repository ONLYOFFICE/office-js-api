// This example shows how to get parent.

// How to get a parent of a slide shape.

// Get a slide shape's parent object.

const presentation = Api.GetPresentation();

const slide = presentation.GetSlideByIndex(0);
const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

slide.RemoveAllObjects();
slide.AddObject(shape);
const parent = shape.GetParent();
const sType = parent.GetClassType();
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class type of the shape parent = " + sType);
