// This example shows how to get the text properties of the run.

// How to get the text properties of the current ApiRun object and change its font size.

// Resize a font of a text run.

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
textPr.SetFontSize(30);
paragraph.SetJc("left");
run.AddText("This is a sample text inside the shape with the font size set to 15 points using the text properties.");
paragraph.AddElement(run);
slide.AddObject(shape);
