// Add a new master slide to a presentation.

// How do I create and add a master slide to a presentation?

// Create a master slide and add it to the presentation's master collection.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const master = Api.CreateMaster();
const countBefore = presentation.GetMastersCount();
presentation.AddMaster(countBefore, master);
const countAfter = presentation.GetMastersCount();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Number of masters before adding new master: " + countBefore);
paragraph.AddLineBreak();
paragraph.AddText("Number of masters after adding new master: " + countAfter);
slide.AddObject(shape);