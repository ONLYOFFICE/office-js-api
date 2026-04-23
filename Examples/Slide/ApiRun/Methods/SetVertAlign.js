// Position text above, on, or below the baseline in a presentation.

// How do I align text vertically in a presentation?

// Create text runs and apply subscript, baseline, and superscript alignment in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);

let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);

run = Api.CreateRun();
run.SetVertAlign("subscript");
run.AddText("This is a text run with the text aligned below the baseline vertically. ");
paragraph.AddElement(run);

run = Api.CreateRun();
run.SetVertAlign("baseline");
run.AddText("This is a text run with the text aligned by the baseline vertically. ");
paragraph.AddElement(run);

run = Api.CreateRun();
run.SetVertAlign("superscript");
run.AddText("This is a text run with the text aligned above the baseline vertically.");
paragraph.AddElement(run);
slide.AddObject(shape);