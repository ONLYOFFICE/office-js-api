// Restore a shape fill color from JSON in a PDF document.

// How can I from j s o n using a color in a PDF document?

// From j s o n for a color in a PDF document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const original = Api.RGB(93, 192, 232);
const json = JSON.parse(original.ToJSON());
const restored = original.FromJSON(json);

const fill = Api.CreateSolidFill(restored);
const stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(0, 0, 0)));
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.SetFontSize(30);
run.AddText('Original: ' + original.GetHex() + '\nRestored: ' + restored.GetHex());
paragraph.AddElement(run);
page.AddObject(shape);