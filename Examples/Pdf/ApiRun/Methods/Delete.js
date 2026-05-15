// Remove text from a PDF.

// How do I delete text in a PDF?

// Erase specific text content in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run.Delete();

run = Api.CreateRun();
run.AddText("This is the second run. The first run was removed from the paragraph.");
paragraph.AddElement(run);
page.AddObject(shape);