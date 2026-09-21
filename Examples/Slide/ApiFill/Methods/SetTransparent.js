// Make a shape's fill semi-transparent on a slide in a presentation.

// How do I make a shape's fill partially see-through in a presentation?

// Fade a shape's solid fill on a slide so the background shows through in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
fill.SetTransparent(39);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);
