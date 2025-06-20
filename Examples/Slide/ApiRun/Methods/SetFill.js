// This example sets the text color to the current text run.

// How to set solid fill to the text.

// Create a new text run and set its font color.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);

run = Api.CreateRun();
const runFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
run.SetFill(runFill);
run.AddText("This is a text run with the font color set to black.");
paragraph.AddElement(run);
slide.AddObject(shape);
