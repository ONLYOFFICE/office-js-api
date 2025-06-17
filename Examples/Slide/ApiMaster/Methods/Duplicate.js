// This example creates a duplicate of the specified slide master object, adds the new slide master to the slide masters collection.

// How to create a duplicate of a slide master.

// Add a duplicate master.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);

const countBefore = presentation.GetMastersCount();
master.Duplicate(1);
const countAfter = presentation.GetMastersCount();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Number of masters before duplicating: " + countBefore);
paragraph.AddLineBreak();
paragraph.AddText("Number of masters after duplicating: " + countAfter);
slide.RemoveAllObjects();
slide.AddObject(shape);
