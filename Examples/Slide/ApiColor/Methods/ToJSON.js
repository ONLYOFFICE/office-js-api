// Convert a shape fill color to JSON in a presentation.

// The color is obtained from the first shape fill on the first slide.

// Convert the color to a JSON string and display the result.

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