// This example specifies the languages which will be used to check spelling and grammar (if requested) when processing the contents of this text run.

// How to change language of the text for grammar check.

// Create a new text run and change its language.

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
run.AddText("This is a text run with the text language set to English (Canada).");
paragraph.AddElement(run);
run.SetLanguage("en-CA");
slide.AddObject(shape);
