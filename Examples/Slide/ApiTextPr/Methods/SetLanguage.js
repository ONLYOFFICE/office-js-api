// Set the spell-check language through the text properties of a run in a presentation.

// How do I choose the proofing language with text properties in a presentation?

// Get the text properties of a run and assign a language code so the text is checked against the matching dictionary in a presentation.

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
const textPr = run.GetTextPr();
textPr.SetFontSize(50);
textPr.SetLanguage("en-CA");
paragraph.SetJc("left");
run.AddText("This is a sample text.");
paragraph.AddElement(run);
slide.AddObject(shape);