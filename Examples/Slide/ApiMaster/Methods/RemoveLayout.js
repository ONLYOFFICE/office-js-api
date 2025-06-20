// This example removes the layouts from the current slide master.

// How to delete layout from a master.

// Delete a slide master layout.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);

const countBefore = master.GetLayoutsCount();
master.RemoveLayout(0, 2);
const countAfter = master.GetLayoutsCount();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Number of layouts before deletion: " + countBefore);
paragraph.AddLineBreak();
paragraph.AddText("Number of layouts after deletion: " + countAfter);
slide.RemoveAllObjects();
slide.AddObject(shape);
