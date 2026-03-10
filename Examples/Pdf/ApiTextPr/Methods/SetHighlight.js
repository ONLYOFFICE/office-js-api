// This example specifies a highlighting color which is added to the text properties and applied as a background to the contents of the run.

// How to highlight a text with a color.

// Get the text properties of the run and highlight it.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
const textPr = run.GetTextPr();
textPr.SetFontSize(50);
textPr.SetHighlight("lightGray");
paragraph.SetJc("left");
run.AddText("This is a sample text inside the shape with the text highlighted with light gray color using the text properties.");
paragraph.AddElement(run);
page.AddObject(shape);
