// This example sets the text outline to the current text run.

// How to make a text outlined.

// Get the text properties of the run and outline it with a stroke.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
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
