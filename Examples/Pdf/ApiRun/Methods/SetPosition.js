// Adjust text baseline alignment in a PDF.

// How do I move text up or down relative to other text in a PDF?

// Raise or lower text positioning in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is a text run with the text raised 10 half-points.");
paragraph.AddElement(run);
run.SetPosition(10);

run = Api.CreateRun();
run.AddText("This is a text run with the text lowered 16 half-points.");
paragraph.AddElement(run);
run.SetPosition(-16);
page.AddObject(shape);