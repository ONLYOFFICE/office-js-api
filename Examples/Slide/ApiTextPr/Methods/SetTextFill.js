// This example sets the text fill to the current text run.

// How to change a font color.

// Get the text properties of the run and color its font.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
const textPr = run.GetTextPr();
textPr.SetFontSize(50);
fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
textPr.SetTextFill(fill);
paragraph.SetJc("left");
run.AddText("This is a sample text inside the shape with the black text fill set using the text properties.");
paragraph.AddElement(run);
slide.AddObject(shape);
