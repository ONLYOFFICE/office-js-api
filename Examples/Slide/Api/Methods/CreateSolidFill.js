// Fill a shape with a solid color in a presentation.

// How do I apply a solid color background to a shape in a presentation?

// Create a solid fill with an RGB color and apply it to a shape in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const rgbColor = Api.RGB(255, 111, 61);
const fill = Api.CreateSolidFill(rgbColor);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
slide.AddObject(drawing);