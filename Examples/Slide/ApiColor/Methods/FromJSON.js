// Restore a shape fill color from JSON in a presentation.

// The JSON string contains the color type and value properties.

// Restore the color object from JSON and apply it to a shape fill.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const original = Api.RGB(93, 192, 232);
const json = JSON.parse(original.ToJSON());
const restored = original.FromJSON(json);

const fill = Api.CreateSolidFill(restored);
const stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(0, 0, 0)));
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.SetFontSize(30);
run.AddText('Original: ' + original.GetHex() + '\nRestored: ' + restored.GetHex());
paragraph.AddElement(run);
slide.AddObject(shape);