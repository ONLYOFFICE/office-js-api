// Specify the shading applied to the contents of the current text run in a PDF document.

// How to add shading to the text in a PDF document.

// Create a new text run and apply shading to it in a PDF document.

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