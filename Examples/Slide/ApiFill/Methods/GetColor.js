// Read the color back from the fill of a shape in a presentation.

// How do I find out which color a shape is filled with in a presentation?

// Inspect the color of a solid fill on a slide in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const color = shape.GetFill().GetColor();
paragraph.AddText("Solid fill color: " + color.GetHex());