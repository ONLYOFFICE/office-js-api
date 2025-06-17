// This example sets the text spacing measured in twentieths of a point.

// How to change a spacing size of a text.

// Get the text properties of the run and resize its spacing (20 * point).

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
const textPr = run.GetTextPr();
textPr.SetFontSize(50);
textPr.SetSpacing(80);
paragraph.SetJc("left");
run.AddText("This is a sample text inside the shape with the spacing set to 4 points (80 twentieths of a point) using the text properties.");
paragraph.AddElement(run);
slide.AddObject(shape);
