// Adjust text position relative to the baseline in a presentation.

// Raise or lower text to create superscript or subscript effects.

// Create text runs and position them above or below the baseline.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is a text run with the text raised 10 half-points.");
paragraph.AddElement(run);
run.SetPosition(10);

run = Api.CreateRun();
run.AddText("This is a text run with the text lowered 16 half-points.");
paragraph.AddElement(run);
run.SetPosition(-16);
slide.AddObject(shape);