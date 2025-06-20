// This example sets the italic property to the text character.

// How to make a text italic.

// Get the text properties of the run and set it to italic.

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
textPr.SetItalic(true);
paragraph.SetJc("left");
run.AddText("This is a sample text inside the shape with the font set to italicized letters using the text properties.");
paragraph.AddElement(run);
slide.AddObject(shape);
