// Remove a text run from a paragraph in a presentation.

// How do I delete a text run in a presentation?

// Remove content from a slide by deleting a text run in a presentation.

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
run.Delete();

run = Api.CreateRun();
run.AddText("This is the second run. The first run was removed from the paragraph.");
paragraph.AddElement(run);
slide.AddObject(shape);