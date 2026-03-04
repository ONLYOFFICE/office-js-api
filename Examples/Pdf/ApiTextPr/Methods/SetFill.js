// This example sets the text color to the text run.

// How to change a color of a text.

// Get the text properties of the run and color its font.

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

const textFill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
textPr.SetFill(textFill);
run.AddText("This is a text run with the font color set to black using the text properties.");
paragraph.AddElement(run);
page.AddObject(shape);
