// Export a shape fill color as a JSON representation in a presentation.

// How do I convert a color to a JSON format in a presentation?

// Serialize a fill color to JSON and display its structure in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const color = Api.RGB(64, 128, 192);
const fill = Api.CreateSolidFill(color);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.SetFontSize(30);
run.AddText('Color JSON:\n' + color.ToJSON());
paragraph.AddElement(run);
slide.AddObject(shape);