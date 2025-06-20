// This example specifies that the contents of the run are displayed with a single horizontal line through the center of the line.

// How to strike out a text with one line.

// Get the text properties of the run and cross it out.

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
textPr.SetStrikeout(true);
paragraph.SetJc("left");
run.AddText("This is a struck out text inside the shape.");
paragraph.AddElement(run);
slide.AddObject(shape);
