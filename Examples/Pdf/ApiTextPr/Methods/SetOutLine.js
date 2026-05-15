// Add a border around text in a PDF.

// How do I create an outline effect on text in a PDF?

// Draw a stroke around characters in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
const textPr = run.GetTextPr();
textPr.SetFontSize(50);
stroke = Api.CreateStroke(0.2 * 36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
textPr.SetOutLine(stroke);
paragraph.SetJc("left");
run.AddText("This is a text run with the black text outline set using the text properties.");
paragraph.AddElement(run);
page.AddObject(shape);