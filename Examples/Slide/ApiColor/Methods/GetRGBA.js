// Read the color channels (red, green, blue, and opacity) of a shape fill in a presentation.

// How do I access the individual color values from a fill in a presentation?

// Extract color channel values from an applied color in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const color = Api.RGBA(110, 160, 180, 127);
const fill = Api.CreateSolidFill(color);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const rgba = color.GetRGBA();
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.SetFontSize(30);
run.AddText('RGBA: ' + rgba.r + ', ' + rgba.g + ', ' + rgba.b + ', ' + rgba.a);
paragraph.AddElement(run);
slide.AddObject(shape);