// This example shows how to move a layout.

// How to move layout using a position index.

// Move a layout of a slide.

const presentation = Api.GetPresentation();
const slide1 = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);
const layout1 = master.GetLayout(3);
slide1.ApplyLayout(layout1);

layout1.MoveTo(7);
const layout2 = master.GetLayout(7);
const slide2 = Api.CreateSlide();
presentation.AddSlide(slide2);
slide2.ApplyLayout(layout2);

const slide3 = Api.CreateSlide();
const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
slide3.AddObject(shape);
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("The third layout was moved to the seventh position within the same collection.");
presentation.AddSlide(slide3);
