// Insert a new layout into a slide master in a presentation.

// How do I add a custom layout to a master in a presentation?

// Create a layout and insert it at a specific position in the master in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);

const countBefore = master.GetLayoutsCount();
const layout = Api.CreateLayout();
master.AddLayout(0, layout);
const countAfter = master.GetLayoutsCount();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Number of layouts before adding new layout: " + countBefore);
paragraph.AddLineBreak();
paragraph.AddText("Number of layouts after adding new layout: " + countAfter);
slide.RemoveAllObjects();
slide.AddObject(shape);