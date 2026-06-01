// Set the language for spell-check and grammar validation of a text run.

// Configure the language for grammar checking on text content in a presentation.

// Create a text run and assign a language code for grammar processing.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.AddText("This is a text run with the text language set to English (Canada).");
paragraph.AddElement(run);
run.SetLanguage("en-CA");
slide.AddObject(shape);