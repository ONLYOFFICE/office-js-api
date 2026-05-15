// Duplicate a slide master in a presentation.

// How do I duplicate a slide master in a presentation?

// Create a new slide master from an existing one in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);

const countBefore = presentation.GetMastersCount();
const copyMaster = master.Copy();
presentation.AddMaster(1, copyMaster);
const countAfter = presentation.GetMastersCount();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Number of masters before adding the copied master: " + countBefore);
paragraph.AddLineBreak();
paragraph.AddText("Number of masters after adding the copied master: " + countAfter);
slide.RemoveAllObjects();
slide.AddObject(shape);