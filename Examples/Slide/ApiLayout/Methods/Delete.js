// Delete a layout from the presentation master.

// Remove objects from a layout that belongs to the slide master.

// The number of layouts decreases after deletion.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);

const countBefore = master.GetLayoutsCount();
const layout = master.GetLayout(0);
layout.Delete();
const countAfter = master.GetLayoutsCount();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
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