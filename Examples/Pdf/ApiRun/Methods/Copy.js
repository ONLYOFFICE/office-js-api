// Copy text and repeat it in a PDF.

// How do I duplicate text in a PDF?

// Reuse text by copying it to another location in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.AddText("This is just a sample text that was copied. ");
paragraph.AddElement(run);

const copyRun = run.Copy();
paragraph.AddElement(copyRun);
page.AddObject(shape);