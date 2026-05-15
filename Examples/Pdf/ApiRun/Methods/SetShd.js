// Apply shading to text in a PDF.

// How do I add a background shade to text in a PDF?

// Apply background shading pattern to text in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.AddText("This is a text run with the text shading set to black.");
paragraph.AddElement(run);
run.SetShd("clear", 51, 51, 51);
page.AddObject(shape);